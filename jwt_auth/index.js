const uuid = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting an array of users
const users = [
  {
    login: 'Liza',
    password: '1111',
    username: 'Name',
  },
  {
    login: 'Liza2',
    password: '2222',
    username: 'Name2',
  },
];

// Session key will be taken from the authorization header
const SESSION_KEY = 'Authorization';

// Middleware for token varification
app.use((req, res, next) => {
  // Getting a settion id from authorization header
  const sessionId = req.get(SESSION_KEY);
  let user = null;

  // If there is a token
  if (sessionId) {
    // Get the data from it
    const tokenData = jwt.verify(sessionId, `${process.env.TOKEN_KEY}`);

    // If there is data
    if (tokenData) {
      // Try to find a user which has username and login as in token data
      user = users.find(
        (user) =>
          user.login == tokenData.login && user.username == tokenData.username
      );
    }

    // Send the user data or null if there's no user
    req.username = user ? user.username : null;
    // Send a token as session ID
    req.sessionId = sessionId;
  }

  // Make the next API call
  next();
});

app.get('/', (req, res) => {
  // If there is an authenticated user
  if (req.username) {
    // Give access to name and logout
    return res.json({
      username: req.username,
      logout: 'http://localhost:3000/logout',
    });
  }
  // If user is not authenticated, send to login page
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/logout', (req, res) => {
  // To logout go back on login
  res.redirect('/');
});

app.post('/api/login', (req, res) => {
  // Get email and password
  const { login, password } = req.body;

  // Check whether there's a user with such credentials
  const user = users.find((user) => {
    if (user.login == login && user.password == password) {
      return true;
    }
    return false;
  });

  // If such a user exists
  if (user) {
    // Create a token for this user
    const token = jwt.sign(
      { login: user.login, username: user.username },
      `${process.env.TOKEN_KEY}`,
      { expiresIn: '2h' }
    );
    res.json({ token });
  }

  // If there's no such user, send an unauthorized error
  res.status(401).send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
