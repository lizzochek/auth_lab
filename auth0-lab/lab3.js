const request = require('request');

// Get token

// Set request options
const options = {
  method: 'POST',
  url: 'https://liza-dolhova.eu.auth0.com/oauth/token/',
  headers: { 'content-type': 'application:/x-www-form-urlencoded' },
  form: {
    realm: 'lab-connection',
    grant_type: 'password',
    username: 'littled@gmail.com',
    password: 'Liza12345',
    audience: 'https://lab-dolhova.com/',
    client_id: 'mUcObk48M3ZaSUYuNlBRxXZ854QZuBkN',
    client_secret:
      'MQnvFZiKP_BEFsduxkQAn7bAb-l3K4uAtWjVUU4Y1SfuEBwrwndwNN6hAZGmZmkV',
    scope: 'offline_access',
  },
};

// Send request
// (async function req() {
//   await request(options, (err, res, body) => {
//     if (err) throw new Error(err);
//     console.log('--- Response body ---');
//     console.log(body);
//   });
// })();

// Refresh token

// Set request options
const refreshOptions = {
  method: 'POST',
  url: 'https://liza-dolhova.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application:/x-www-form-urlencoded' },
  form: {
    grant_type: 'refresh_token',
    client_id: 'mUcObk48M3ZaSUYuNlBRxXZ854QZuBkN',
    client_secret:
      'MQnvFZiKP_BEFsduxkQAn7bAb-l3K4uAtWjVUU4Y1SfuEBwrwndwNN6hAZGmZmkV',
    refresh_token:
      'v1.MW_RJp9RZsvj313JkkjoB9QoQt8-Y0Tb3Y0KbeIVvF9eWPAhNGGOtdRyHaTVg-7bsAdBNh7Avq-TmMzir60KhMk',
  },
};

// Send request
// (async function req() {
//   await request(refreshOptions, (err, res, body) => {
//     if (err) throw new Error(err);

//     console.log('--- Refresh response body ---');
//     console.log(body);
//   });
// })();

// Change password

const passwordOptions = {
  method: 'PATCH',
  url: 'https://liza-dolhova.eu.auth0.com/api/v2/users/auth0|abc1',
  headers: {
    'content-type': 'application/json',
    'Authorization':
      `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkQwN2h6eU55a0FPRmotR19WbHJyVSJ9.eyJpc3MiOiJodHRwczovL2xpemEtZG9saG92YS5ldS5hdXRoMC5jb20vIiwic3ViIjoibVVjT2JrNDhNM1phU1VZdU5sQlJ4WFo4NTRRWnVCa05AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbGl6YS1kb2xob3ZhLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjcwMzI5MDM3LCJleHAiOjE2NzA0MTU0MzcsImF6cCI6Im1VY09iazQ4TTNaYVNVWXVObEJSeFhaODU0UVp1QmtOIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgcmVhZDpvcmdhbml6YXRpb25zX3N1bW1hcnkgY3JlYXRlOmFjdGlvbnNfbG9nX3Nlc3Npb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.ZlmZEu-rO5TGXDleYi0jHJhrMjkkbm4o1lWIzeq3gSNfJ0cegxhTRoa_LvPfFeeKCfxE2xABV4mMnEqZ_iT9nyjSKZ6CM8KhzEnkohGhP1NufCDX1uTprvQUDkHx30ChcVgQphrylcLs0JBmEfQDXo6GmfhGBKP0vvZ91pOA_5TSK6Nl6jQU7XwCGoCua6DUXfiJwnUHi3Ppiv4VV0GeepWCR07NPPfflSrpPGGLWJIFl6EvDCW_y2soA1u3YiWZBccOh1nJ3Md5R_ns7ppkr3rqFtehhFuw6X1ppD5NqWlCuO1AoUEzTj6pKO992LnbM5BRpl4MfJgZ426DDBQ9iw`
  },
  json: { 'password': 'Liza1234567', 'connection': 'Username-Password-Authentication' },
};

// Send request
(async function req() {
  await request(passwordOptions, (err, res, body) => {
    if (err) throw new Error(err);

    console.log('--- Change password response body ---');
    console.log(body);
  });
})();
