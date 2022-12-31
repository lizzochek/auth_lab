const { createUser } = require('./createUser');
const { getRefreshToken } = require('./getRefreshToken');
const { getAccessToken } = require('./getAccessToken');
const { refreshToken } = require('./refreshToken');
const { getUserData } = require('./getUserData');
const { writeFile } = require('./writeFile');
const { loadKey, readKey } = require('./keys');

const helpers = {
  createUser,
  getRefreshToken,
  getAccessToken,
  refreshToken,
  writeFile,
  getUserData,
  loadKey,
  readKey,
};

module.exports = { helpers };
