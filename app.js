const express = require('express');
const app = express();
const Account = require('./api/account');
const Network = require('./api/network');
const Tokens = require('./api/tokens');

app.get('/accounts', async (req, res) => {
  res.json(await Account.loadAccounts());
});

app.get('/tokenBalances', async (req, res) => {
    res.json(await Account.loadTokenBalances(req.query.password));
});

app.get('/allBlocks', async (req, res) => {
    res.json(await Account.loadAllBlocks());
});

app.get('/nodes', async (req, res) => {
    res.json(await Network.loadNodes());
});

app.get('/witnesses', async (req, res) => {
    res.json(await Network.loadWitnesses());
});

app.get('/tokens', async (req, res) => {
    res.json(await Tokens.loadTokens());
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
