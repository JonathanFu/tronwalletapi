const express = require('express');
const app = express();
const Account = require('./api/account');
const Network = require('./api/network');
const Tokens = require('./api/tokens');

app.get('/accounts', (req, res) => {
  res.send({
      Accounts: Account.loadAccounts()
  });
});

app.get('/tokenBalances', (req, res) => {
    res.send({
        TokenBalances: Account.loadTokenBalances('password')
    });
});

app.get('/allBlocks', (req, res) => {
    res.send({
        AllBlocks: Account.loadAllBlocks()
    });
});

app.get('/nodes', (req, res) => {
    res.send({
        Nodes: Network.loadNodes()
    });
});

app.get('/witnesses', (req, res) => {
    res.send({
        Witnesses: Network.loadWitnesses()
    });
});

app.get('/tokens', (req, res) => {
    res.send({
        Tokens: Tokens.loadTokens()
    });
});



// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
