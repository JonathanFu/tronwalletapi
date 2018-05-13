const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const Account = require('./api/account');
const Network = require('./api/network');
const Token = require('./api/token');
const Vote = require('./api/vote');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/accounts', async (req, res) => {
  res.json(await Account.loadAccounts());
});

app.get('/accountBalance', async (req, res) => {
    if(!req.query.address) return res.json({message: 'Please pass `address` as `~/accountbalance?address={address}`'});
    res.json(await Account.loadTokenBalances(req.query.address));
});

app.get('/tokenBalances', async (req, res) => {
    res.json({message: 'Please use API end point `~/accountbalance?address={address}`'});
});

app.get('/allBlocks', async (req, res) => {
    res.json(await Account.loadAllBlocks());
});

app.get('/latestBlock', async (req, res) => {
    res.json(await Account.getLatestBlock());
});

app.get('/nodes', async (req, res) => {
    res.json(await Network.loadNodes());
});

app.get('/witnesses', async (req, res) => {
    res.json(await Network.loadWitnesses());
});

app.get('/tokens', async (req, res) => {
    res.json(await Token.loadTokens());
});


app.get('/totalNumberOfTransactions', async (req, res) => {
    res.json(await Token.loadTotalNumberOfTransactions());
});

app.get('/tronPrice', async (req, res) => {
    res.json(await Token.loadTronPrice());
});

app.post('/voteForWitnesses', async (req, res) => {
    if(!req.body || !req.body.address) return res.json({message: 'Please pass `address` in POST body'});
    if(!req.body.voteList) return res.json({message: 'Please pass `voteList` in POST body, e.g. voteList: [{address: "xxewedsfsdfsdxx", amount: 10}]'});
    if(!Array.isArray(req.body.voteList)) return res.json({message: 'Please pass `voteList` as an Array, e.g. voteList: [{address: "xxxxxxdfsdfsdfx", amount: 10}]'});

    let witnessVotes = req.body.voteList.map(vote => ({
        address: vote.address,
        amount: parseInt(vote.amount, 10)
    })).filter(vote => vote.amount > 0);

    if(!witnessVotes.length) return res.json({message: 'No Witness voted'});

    res.json(await Vote.voteForWitnesses(req.body.address, witnessVotes));
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
