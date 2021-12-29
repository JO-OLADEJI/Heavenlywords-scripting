require('dotenv').config();
const alchemyKey = process.env.ALCHEMY_URL;
const sender = process.env.SENDER;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json');
const contractAddress = "0x58c14f43cbc58cb7bf641c521e2360941f957bf9";


const getImageDescById = async (id) => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getImageDescById(id).call({ from: sender });
    console.log({ value });
  }
  catch (err) {
    console.log({ err });
  }
}

module.exports = {
  getImageDescById
}