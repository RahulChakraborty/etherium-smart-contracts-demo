//const web3 = new Web3(window.web3.currentProvider);
// when you run this in a browser
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const provider = new HDWalletProvider(
    'security word',
    'API Url'
  );

const web3= new Web3(provider);
module.exports = web3;