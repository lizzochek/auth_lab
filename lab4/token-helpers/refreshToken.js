const request = require('request');
const { writeFile } = require('./writeFile.js');
const fs = require('fs');
require('dotenv').config({ path: __dirname + '/.env' });

const refreshToken = () => {
  const refresh_token = fs.readFileSync('.refresh-token', 'utf8');

  const options = {
    method: 'POST',
    url: 'https://liza-dolhova.eu.auth0.com/oauth/token/',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    form: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      refresh_token,
      grant_type: 'refresh_token',
    },
  };

  return new Promise((resolve) =>
    request(options, async (error, response, body) => {
      if (error) throw new Error(error);

      const { access_token } = JSON.parse(body);
      writeFile('.access-token', access_token);
      resolve();
    })
  );
};

module.exports = { refreshToken };
