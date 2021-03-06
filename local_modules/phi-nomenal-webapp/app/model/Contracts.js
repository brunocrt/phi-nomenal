import Web3 from 'web3'
import contract from 'truffle-contract'

import RFQRegistryJSON from 'phi-nomenal-contracts/build/contracts/RFQRegistry.json'
import RFQJSON from 'phi-nomenal-contracts/build/contracts/RFQ.json'
import MatchingEngineJSON from 'phi-nomenal-contracts/build/contracts/MatchingEngine.json'
import QuotationJSON from 'phi-nomenal-contracts/build/contracts/Quotation.json'
import LocationJSON from 'phi-nomenal-contracts/build/contracts/Location.json'
import OrderHistoryLegJSON from 'phi-nomenal-contracts/build/contracts/OrderHistoryLeg.json'
import OrderHistoryJSON from 'phi-nomenal-contracts/build/contracts/OrderHistory.json'

const RFQRegistry = contract(RFQRegistryJSON)
const RFQ = contract(RFQJSON)
const MatchingEngine = contract(MatchingEngineJSON)
const Quotation = contract(QuotationJSON)
const Location = contract(LocationJSON)
const OrderHistoryLeg = contract(OrderHistoryLegJSON)
const OrderHistory = contract(OrderHistoryJSON)

const web3Location = 'http://localhost:8545'
var web3Provided
// Supports Metamask and Mist, and other wallets that provide 'web3'.
if (typeof web3 !== 'undefined') {
  // Use the Mist/wallet provider.
  // eslint-disable-next-line
  web3Provided = new Web3(web3.currentProvider)
} else {
  web3Provided = new Web3(new Web3.providers.HttpProvider(web3Location))
}

RFQRegistry.setProvider(web3Provided.currentProvider)
RFQ.setProvider(web3Provided.currentProvider)
MatchingEngine.setProvider(web3Provided.currentProvider)
Quotation.setProvider(web3Provided.currentProvider)
Location.setProvider(web3Provided.currentProvider)
OrderHistoryLeg.setProvider(web3Provided.currentProvider)
OrderHistory.setProvider(web3Provided.currentProvider)

const accounts = web3Provided.eth.accounts

export {
  RFQ, RFQRegistry,
  MatchingEngine,
  Quotation,
  Location, OrderHistoryLeg, OrderHistory,
  accounts }
