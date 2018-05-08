const HttpClient = require("@tronprotocol/wallet-api/src/client/http");

exports.Client = new HttpClient({
  url: process.env.API_URL || `https://tronscan.io`,
});
