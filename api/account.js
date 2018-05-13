const Client = require("../services/api");

exports.loadAccounts = async () => {
    let accounts = await Client.getAccountList();
    return accounts;
};

exports.loadAccountBalances = async (address) => {
    let balances = await Client.getAccountBalances(address);
    return balances;
};

exports.loadTokenBalances = async (address) => {
  let balances = await Client.getAccountBalances(address);
  return balances;
};

exports.getLatestBlock = async () => {
    let block = await Client.getLatestBlock();
    return block;
};

exports.loadAllBlocks = async () => {

  let block = await Client.getLatestBlock();

  let blockRequests = [];

  for (let i = 0; i < 100; i++) {
    if ((block.number - i) < 0) {
      break;
    }
    blockRequests.push(await Client.getBlockByNum(block.number - i));
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
        blockRequests.push(await Client.getBlockByNum(block.number - i));
    }

    return blockRequests;
};

exports.loadTotalNumberOfTransactions = async () => {

    let totalTransactions = await Client.getTotalNumberOfTransactions();
    return totalTransactions;
};
