const request = require('request');

// // Get token

// // Set request options
// const options = {
//   method: 'POST',
//   url: 'https://liza-dolhova.eu.auth0.com/oauth/token',
//   headers: { 'content-type': 'application:/x-www-form-urlencoded' },
//   form: {
//     client_id: 'mUcObk48M3ZaSUYuNlBRxXZ854QZuBkN',
//     client_secret:
//       'MQnvFZiKP_BEFsduxkQAn7bAb-l3K4uAtWjVUU4Y1SfuEBwrwndwNN6hAZGmZmkV',
//     audience: 'https://liza-dolhova.eu.auth0.com/api/v2/',
//     grant_type: 'client_credentials',
//   },
// };

// // Send request
// request(options, (err, res, body) => {
//   if (err) throw new Error(err);
//   console.log(body);
// });

// Create user

const userRequestOptions = {
  method: 'POST',
  url: 'https://liza-dolhova.eu.auth0.com/api/v2/users',
  headers: {
    'content-type': 'application/json',
    'Authorization':
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkQwN2h6eU55a0FPRmotR19WbHJyVSJ9.eyJpc3MiOiJodHRwczovL2xpemEtZG9saG92YS5ldS5hdXRoMC5jb20vIiwic3ViIjoibVVjT2JrNDhNM1phU1VZdU5sQlJ4WFo4NTRRWnVCa05AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbGl6YS1kb2xob3ZhLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjY5MTI5MjcyLCJleHAiOjE2NjkyMTU2NzIsImF6cCI6Im1VY09iazQ4TTNaYVNVWXVObEJSeFhaODU0UVp1QmtOIiwic2NvcGUiOiJyZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBjcmVhdGU6dXNlcnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.WnoSvbbMMlYOxdKkujSqkLcuAsHK8PuDctvO5f2I_-HSC9yNHDUdFyK4Dhv9C8m_3oOL8R-SpwQsVkA0zsznXSmwjhw0AlWm2oy8cidjnivq6SV4SNFNIfb3GmpQLFfUjtJP-D1vvVLoLKgCOuSrlO66_G3tqJqQ8klkpIxW3aEq4xzzDF5Edv7WxJembEJxYZGVV4WqwzTAf06EG2wDc1SpMZd0csujLlLQbHYyq6q8lAlYEXEv_Omx45xOR_WMbOzahhwAQ4mDc-weTHBtSQrumYMghslUeO18N6yYeV4b_SzLgmr5f291RvddLI1RSkxMbPZmv6wKSbJ1SQLxzA',
  },
  body: JSON.stringify({
    "email": 'littled685@gmail.com',
    "user_metadata": {},
    "blocked": false,
    "email_verified": false,
    "app_metadata": {},
    "given_name": 'Liza',
    "family_name": 'Dolhova',
    "name": 'Liza Dolhova',
    "nickname": 'Liz',
    "picture":
      'https://secure.gravatar.com/avatar/15626c5e0c749cb912f9d1ad48dba440?s=480&r=pg&d=https%3A%2F%2Fssl.gstatic.com%2Fs2%2Fprofiles%2Fimages%2Fsilhouette80.png',
    "user_id": 'abc',
    "connection": 'Username-Password-Authentication',
    "password": 'Liza1234',
    "verify_email": false,
  }),
};

request(userRequestOptions, (err, res, body) => {
  if (err) throw new Error(err);

  console.log(body);
});
