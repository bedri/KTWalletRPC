const { RpcClient } = require('./rpc.service')
const { success, error } = require('../models/ApiResponse')


walletConf = {
    default: {
        protocol: 'http',
        host: 'localhost',
        port: 1111,
        user: 'user',
        pass: 'pass'
    }
 }

connect = (coin) => {
    if (!walletConf[coin]) {
        callback(`${coin} is not supported`)
        return
    }

   return new RpcClient(walletConf[coin])
}

const getBlockHeader = (coin, hash, verbose, callback) => {

    if (!walletConf[coin]) {
        callback(`${coin} is not supported`) 
        return
    }

    connect(coin).getBlockHeader(hash, verbose || false, callback)
}

const getBlockHash = (coin, blockId, callback) => {

    if (!walletConf[coin]) {
        callback(`${coin} is not supported`) 
        return
    }

    connect(coin).getBlockHash(+blockId, callback)
}

const getInfo = (coin, callback) => {
    if (!walletConf[coin]) {
        callback(`${coin} is not supported`) 
        return
    }

    connect(coin).getInfo(callback)
}

const getNewAddress = (coin, callback) => {

    if (!walletConf[coin]) {
        callback(`${coin} is not supported`)
        return
    }

    connect(coin).getNewAddress(callback)
}

module.exports = {
    walletConf,
    getBlockHash,
    getBlockHeader,
    getInfo,
    getNewAddress
}
