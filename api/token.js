const Client = require("../services/api");
const xhr = require("axios");

exports.loadTokens = async () => {
  let assets = await Client.getAssetIssueList();
  return assets;
};

exports.loadTotalNumberOfTransactions = async () => {
    let totalTransactions = await Client.getTotalNumberOfTransactions();
    return totalTransactions;
};

exports.loadTronPrice = async () => {
    const {data} = await xhr.get(`https://api.coinmarketcap.com/v1/ticker/tronix/`);
    return data;
};
