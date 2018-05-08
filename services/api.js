const HttpClient = require("@tronprotocol/wallet-api/src/client/http");

module.exports = new HttpClient({
  url: process.env.API_URL,
});
