const Client = require("../services/api");
const xhr = require("axios");

exports.voteForWitnesses = async (address, witnessVotes) => {

    const url = process.env.API_URL || `https://tronscan.io`;

    let {data} = await xhr.post(`${url}/createVoteWitnessToView`, {
        owner: address,
        list: witnessVotes
    });

    return await Client.signTransaction(address, data);
};