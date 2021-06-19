var Tx   = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3('')

const account = '0xa9f5a0d1a7705Ceb55C57727a2D0b212a53EC73D' 

const privateKey1 = Buffer.from(process.env.private_key, 'hex')
web3.eth.getTransactionCount(account, (err, txCount) => {
const data = '0x60606040526040805190810160405280600981526020017f55455420546f6b656e00000000000000000000000000000000000000000000008152506000908051906020019061004f929190610119565b506040805190810160405280600381526020017f55455400000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b929190610119565b506040805190810160405280600e81526020017f55455420546f6b656e2076312e30000000000000000000000000000000000000815250600290805190602001906100e7929190610119565b506012600360006101000a81548160ff021916908360ff1602179055506000600455341561011457600080fd5b6101be565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061015a57805160ff1916838001178555610188565b82800160010185558215610188579182015b8281111561018757825182559160200191906001019061016c565b5b5090506101959190610199565b5090565b6101bb91905b808211156101b757600081600090555060010161019f565b5090565b90565b6106eb806101cd6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b31461005e57806323b872dd146100b85780635d256bea14610131578063a9059cbb1461015457600080fd5b341561006957600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101ae565b604051808215151515815260200191505060405180910390f35b34156100c357600080fd5b610117600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506102a0565b604051808215151515815260200191505060405180910390f35b341561013c57600080fd5b610152600480803590602001909190505061050f565b005b341561015f57600080fd5b610194600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610566565b604051808215151515815260200191505060405180910390f35b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156102f057600080fd5b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561037b57600080fd5b81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508060046000828254019250508190555050565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156105b657600080fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050929150505600a165627a7a723058200d6b8a7069fa54016718d9847ebb11dd2f01747b7e6e27d6380db53886a97e990029'


  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(1000000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: data
  }

  const tx = new Tx(txObject,  {'chain':'ropsten'})
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('err:', err, 'txHash:', txHash)
    // Use this txHash to find the contract on Etherscan!
  })
})