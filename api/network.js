const Client = require("../services/api");

exports.loadWitnesses = async () => {
  return await Client.getWitnesses();
};

exports.loadNodes = async () => {
  let nodes = await Client.getNodes();

  return nodes.citys;
};
