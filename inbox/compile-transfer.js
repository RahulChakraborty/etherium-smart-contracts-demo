const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Transfer.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');
console.log(solc.compile(source, 1).contracts[':Transfer']);
module.exports = solc.compile(source, 1).contracts[':Transfer'];
