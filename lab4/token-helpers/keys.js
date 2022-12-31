const request = require('request');
const fs = require('fs');
const { writeFile } = require('./writeFile.js');
require('dotenv').config({ path: __dirname + '/.env' });

const loadKey = () =>
  new Promise((resolve, reject) =>
    request(
      {
        method: 'GET',
        url: 'https://liza-dolhova.eu.auth0.com/pem',
      },
      (error, response, body) => {
        if (error) reject(error);
        writeFile('keys', body);
        resolve();
      }
    )
  );

const readKey = () => {
  return fs.readFileSync('./keys', 'utf8');
};

module.exports = {
  loadKey,
  readKey,
};
