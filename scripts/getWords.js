require('dotenv').config();
const alchemyKey = process.env.ALCHEMY_URL;
const sender = process.env.SENDER;
const contractAddress = process.env.CONTRACT_ADDRESS;
const contractABI = require('../contract-abi.json');
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

/**
 * 
 * @param {Number} id - tokenID of the image description
 */
const getImageDescById = async (id) => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getImageDescById(id).call({ from: sender });
    console.log({value});
    return value;
  }
  catch (err) {
    console.log({err});
    return '';
  }
}

module.exports = {
  getImageDescById
}