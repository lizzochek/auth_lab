const uuid = require('uuid');
const express = require('express');
const onFinished = require('on-finished');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const fs = require('fs');
require('dotenv').config({ path: `${__dirname}/token-helpers` + '/.env' });

const jwtDecode = require('jwt-decode');
const { helpers } = require('./token-helpers/index');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const SESSION_KEY = 'Authorization';

class Session {
  #sessions = {};

  constructor() {
    try {
      this.#sessions = fs.readFileSync('./sessions.json', 'utf8');
      this.#sessions = JSON.parse(this.#sessions.trim());

      console.log(this.#sessions);
    } catch (e) {
      this.#sessions = {};
    }
  }

  #storeSessions() {
    fs.writeFileSync(
      './sessions.json',
      JSON.stringify(this.#sessions),
      'utf-8'
    );
  }

  set(key, value) {
    if (!value) {
      value = {};
    }
    this.#sessions[key] = value;
    this.#storeSessions();
  }

  get(key) {
    return this.#sessions[key];
  }

  init(res) {
    const sessionId = uuid.v4();
    this.set(sessionId);

    return sessionId;
  }

  destroy(req, res) {
    const sessionId = req.sessionId;
    delete this.#sessions[sessionId];
    this.#storeSessions();
  }
}

const sessions = new Session();

app.use((req, res, next) => {
  let currentSession = {};
  let sessionId = req.get(SESSION_KEY);

  if (sessionId) {
    currentSession = sessions.get(sessionId);
    if (!currentSession) {
      currentSession = {};
      sessionId = sessions.init(res);
    }
  } else {
    sessionId = sessions.init(res);
  }

  req.session = currentSession;
  req.sessionId = sessionId;

  onFinished(req, () => {
    const currentSession = req.session;
    const sessionId = req.sessionId;
    sessions.set(sessionId, currentSession);
  });

  next();
});

app.get('/', (req, res) => {
  if (req.session.username) {
    return res.json({
      username: req.session.username,
      logout: 'http://localhost:3000/logout',
    });
  }
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/logout', (req, res) => {
  sessions.destroy(req, res);
  helpers.writeFile('.access-token', '');
  helpers.writeFile('.refresh-token', '');
  res.redirect('/');
});

app.post('/api/register', async (req, res) => {
  try {
    await helpers.getAccessToken();
    await helpers.createUser(req.body);
    helpers.writeFile('.access-token', '');
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }

  return res.status(200).end();
});

app.post('/api/login', async (req, res) => {
  const { login, password } = req.body;

  process.env.USERNAME = login;
  process.env.PASSWORD = password;

  try {
    await helpers.getRefreshToken();
    const access_token = fs.readFileSync('.access-token', 'utf8');

    if (access_token) {
      const { exp } = jwtDecode(access_token);
      const currentTime = Date.now().valueOf() / 1000;

      if (Math.abs(currentTime - exp) < 3600) {
        await helpers.refreshToken();
      }
      await helpers.getUserData();
      req.session.username = process.env.NAME;
      res.json({ token: req.sessionId });
    }

    return res.status(400).end();
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
