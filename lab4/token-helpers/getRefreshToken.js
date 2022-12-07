const request = require('request');
const { writeFile } = require('./writeFile.js');
require('dotenv').config({ path: __dirname + '/.env' });

const getRefreshToken = () => {
  const options = {
    method: 'POST',
    url: 'https://liza-dolhova.eu.auth0.com/oauth/token/',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    form: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      audience: 'https://lab-dolhova.com/',
      grant_type: 'password',
      realm: 'lab-connection',
      scope: 'offline_access',
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  };

  return new Promise((resolve) =>
    request(options, async (err, res, body) => {
      if (err) throw new Error(err);
      const { access_token, refresh_token } = JSON.parse(body);
      if (access_token && refresh_token) {
        writeFile('.access-token', access_token);
        writeFile('.refresh-token', refresh_token);
      }
      resolve();
    })
  );
};

module.exports = { getRefreshToken };
