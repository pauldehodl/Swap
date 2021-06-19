const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction
const web3 = new Web3('')

const account = 
const privateKey1 = Buffer.from(process.env.private_key, 'hex')

//swapExactETHForTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline)
const contractAddress = '0x7a250d5630b4cf539739df2c5dacb4c659f2488d'
const abi = 

var amountIn = web3.utils.toWei('', ether)
const amountOutMin = web3.utils.toWei('0.01', 'ether')
var WETHAddress = 
var contractAddress2 = 
var pair = [WETHAddress, contractAddress2]
var deadline = 
// unixTime*100

const contract = new web3.eth.Contract(abi, contractAddress)
const data =  contract.methods.swapExactETHForTokens(amountOutMin, pair, account, deadline).encodeABI()

web3.eth.getTransactionCount(account1, (err, txCount) => {

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    value : web3.utils.toHex(amountIn),
    gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to: contractAddress,
    data: data 
  }

  const tx = new Tx(txObject, {'chain':'ropsten'})
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('err:', err, 'txHash:', txHash)
    // Use this txHash to find the contract on Etherscan!
  })
})