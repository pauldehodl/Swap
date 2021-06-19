const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction
const web3 = new Web3('')

const account =  

const privateKey1 = Buffer.from(process.env.private_key, 'hex')

// Read the deployed contract - get the addresss from Etherscan
const contractAddress = 
const abi = 

const amountIn = web3.utils.toWei('300', 'ether')
const amountOutMin = web3.utils.toWei('0.01', 'ether')
var contractAddress1 = '0xaD6D458402F60fD3Bd25163575031ACDce07538D'
var contractAddress2 = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
var pair = [contractAddress1, contractAddress2]
var deadline = 
// unixTime*100

const contract = new web3.eth.Contract(abi, contractAddress)
const data =  contract.methods.swapExactTokensForTokens(amountIn, amountOutMin, pair, account, deadline).encodeABI()
// Transfer some tokens
web3.eth.getTransactionCount(account, (err, txCount) => {

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to: contractAddress,
    gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
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