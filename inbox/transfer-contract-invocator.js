const transfer = require('./transfer-abi')
const web3 = require('./web3-adapter')


  const contractTest = async event => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    console.log(transfer.options.address);
    const initialBalance = await web3.eth.getBalance(accounts[0]);
    console.log('Initial Balance in The Contract '+ initialBalance);
     try{
        await transfer.methods.enter().send({
          from: accounts[0],
          value: web3.utils.toWei('0.36', 'ether'),
          gas: '1000000'
        });
  }catch (ex){
      // console.log(ex);
  }
  const finalBalance = await web3.eth.getBalance(accounts[0]);
  console.log('Final Balance in The Contract '+ finalBalance);
  };

  contractTest();

