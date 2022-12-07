const request = require('request');
const fs = require('fs');
require('dotenv').config({ path: __dirname + '/.env' });
const { getAccessToken } = require('./getAccessToken');

const getUserData = async () => {
  await getAccessToken();
  const access_token = fs.readFileSync('.access-token', 'utf8');

  const options = {
    method: 'GET',
    url: 'https://liza-dolhova.eu.auth0.com/api/v2/users',
    params: { q: `email:"${process.env.USERNAME}"`, search_engine: 'v3' },
    headers: { authorization: `Bearer ${access_token}` },
  };

  return new Promise((resolve) =>
    request(options, async (err, res, body) => {
      if (err) throw new Error(err);
      const { name } = JSON.parse(body)[0];
      process.env.NAME = name;
      resolve();
    })
  );
};

module.exports = { getUserData };
