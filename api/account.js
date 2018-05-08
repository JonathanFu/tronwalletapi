const Client = require("../services/api");

exports.loadAccounts = async () => {
    let accounts = await Client.getAccountList();
    return accounts;
};

exports.loadTokenBalances = async (password) => {
  let balances = await Client.getAccountBalances(password);
  return balances;
};


exports.loadAllBlocks = async () => {

  let block = await Client.getLatestBlock();

  let blockRequests = [];

  for (let i = 0; i < 100; i++) {
    if ((block.number - i) < 0) {
      break;
    }
    blockRequests.push(Client.getBlockByNum(block.number - i));
  }

  return blockRequests;
};


exports.loadBlocks = async () => {

    let block = await Client.getLatestBlock();

    let blockRequests = [];

    for (let i = 0; i < 7; i++) {
        if ((block.number - i) < 0) {
            break;
        }
        blockRequests.push(Client.getBlockByNum(block.number - i));
    }

    return blockRequests;
};

exports.loadTotalNumberOfTransactions = async () => {

    let totalTransactions = await Client.getTotalNumberOfTransactions();
    return totalTransactions;
};
