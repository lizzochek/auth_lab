const request = require('request');
const { writeFile } = require('./writeFile.js');
require('dotenv').config({ path: __dirname + '/.env' });

const getAccessToken = () => {
  const options = {
    method: 'POST',
    url: 'https://liza-dolhova.eu.auth0.com/oauth/token/',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    form: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      audience: 'https://liza-dolhova.eu.auth0.com/api/v2/',
      grant_type: 'client_credentials',
    },
  };

  return new Promise((resolve) =>
    request(options, async (err, res, body) => {
      if (err) throw new Error(err);
      const { access_token } = JSON.parse(body);
      writeFile('.access-token', access_token);
      resolve();
    })
  );
};

module.exports = { getAccessToken };
