const request = require('request');
let token;
// Get token

// // Set request options
const options = {
  method: 'POST',
  url: 'https://liza-dolhova.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application:/x-www-form-urlencoded' },
  form: {
    client_id: 'mUcObk48M3ZaSUYuNlBRxXZ854QZuBkN',
    client_secret:
      'MQnvFZiKP_BEFsduxkQAn7bAb-l3K4uAtWjVUU4Y1SfuEBwrwndwNN6hAZGmZmkV',
    audience: 'https://liza-dolhova.eu.auth0.com/api/v2/',
    grant_type: 'client_credentials',
  },
};

// // Send request
request(options, (err, res, body) => {
  if (err) throw new Error(err);
  token = JSON.parse(body).access_token;
  
  console.log(token);
});

// Create user

const userRequestOptions = {
  method: 'POST',
  url: 'https://liza-dolhova.eu.auth0.com/api/v2/users',
  headers: {
    'content-type': 'application/json',
    'Authorization':
      `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkQwN2h6eU55a0FPRmotR19WbHJyVSJ9.eyJpc3MiOiJodHRwczovL2xpemEtZG9saG92YS5ldS5hdXRoMC5jb20vIiwic3ViIjoibVVjT2JrNDhNM1phU1VZdU5sQlJ4WFo4NTRRWnVCa05AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbGl6YS1kb2xob3ZhLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjcwMjQxNjY3LCJleHAiOjE2NzAzMjgwNjcsImF6cCI6Im1VY09iazQ4TTNaYVNVWXVObEJSeFhaODU0UVp1QmtOIiwic2NvcGUiOiJ1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBjcmVhdGU6dXNlcnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.oafuCzLhB1LidyeMXf-LuxMEJ7UG3LsL1FFp12Gt5hTPwQ8ROg1xF98ExAQoDpJtvcb2PuPsRhw-wAlmYy3B5GYQIjCgTaCNk_IbYmBzUulmLh41cx4-R4QK-pO9sthRy3xKOmNc1dHrcFNT1FU8fgiUvu4VktuaU6rze5cKzg0cxfNfgjJFumhGM9b65b6Ib8rWYtdyG2tK7rhf8mzoPt0Kt7aWJ2jkKNuVzgLK8ElEgh_AtCHt5phHwmpkhWPNBOcBGDfeqNL8WjvBGlaEO9iD1sWNxgIFCQwDWfjqDrypnVgTAaOoK0APalUeVI3H_If7j1gXq11gWi39m6lTJA`
  },
  body: JSON.stringify({
    "email": 'littled@gmail.com',
    "user_metadata": {},
    "blocked": false,
    "email_verified": false,
    "app_metadata": {},
    "given_name": 'Liza1',
    "family_name": 'Dolhova1',
    "name": 'Liza Dolhova1',
    "nickname": 'Liz1',
    "picture":
      'https://secure.gravatar.com/avatar/15626c5e0c749cb912f9d1ad48dba440?s=480&r=pg&d=https%3A%2F%2Fssl.gstatic.com%2Fs2%2Fprofiles%2Fimages%2Fsilhouette80.png',
    "user_id": 'abc1',
    "connection": 'lab-connection',
    "password": 'Liza12345',
    "verify_email": false,
  }),
};

// request(userRequestOptions, (err, res, body) => {
//   if (err) throw new Error(err);

//   console.log(body);
// });
