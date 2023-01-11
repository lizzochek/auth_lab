const uuid = require('uuid');
const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');
const port = 3000;

const fs = require('fs');
const jwt = require('jsonwebtoken');
const request = require('request');
require('dotenv').config({ path: __dirname + '/.env' });

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

  destroy(req, res) {
    const sessionId = req.sessionId;
    delete this.#sessions[sessionId];
    this.#storeSessions();
  }
}

const sessions = new Session();
let publicKey = null;

app.use(async (req, res, next) => {
  let currentSession = {};
  let sessionId = req.get(SESSION_KEY);
  if (sessionId) {
    currentSession = sessions.get(sessionId);
  }

  req.session = currentSession;
  req.sessionId = sessionId;
  next();
});

app.get('/', async (req, res) => {
  if (req.session.username) {
    return res.json({
      username: req.session.username,
      logout: 'http://localhost:3000/logout',
    });
  }
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/api/codelogin', (req, res) => {
  const { code } = req.body;
  let options = {
    method: 'POST',
    url: process.env.URL,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    form: {
      client_id: process.env.CLIENT_ID,
      audience: process.env.AUDIENCE,
      client_secret: process.env.CLIENT_SECRET,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/',
      scope: 'offline_access',
    },
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    if (body) {
      sessions.set(resBody.access_token, { username: 'Liza' });
      res.json({ token: resBody.access_token });
    }
  });
});

app.get('/logout', (req, res) => {
  sessions.destroy(req, res);
  res.redirect('/');
});

app.get('/login', (req, res) => {
  return res.redirect(process.env.REDIRECT_URL);
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
