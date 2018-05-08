const Client = require("../services/api");

exports.loadTokens = async () => {
  let assets = await Client.getAssetIssueList();
  return assets;
};
