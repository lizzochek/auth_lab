const request = require('request');
const fs = require('fs');

const createUser = async (data) => {
  const token = fs.readFileSync('.access-token', 'utf8');
  const { name, email, surname, nickname, password } = data;

  const options = {
    method: 'POST',
    url: 'https://liza-dolhova.eu.auth0.com/api/v2/users',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    json: {
      email,
      user_metadata: {},
      blocked: false,
      email_verified: false,
      app_metadata: {},
      given_name: name,
      family_name: surname,
      name,
      nickname,
      user_id: Date.now().toString(),
      connection: 'lab-connection',
      password,
      verify_email: false,
    },
  };

  return new Promise((resolve) =>
    request(options, async (err, res, body) => {
      if (err) throw new Error(err);
      resolve();
    })
  );
};

module.exports = { createUser };
