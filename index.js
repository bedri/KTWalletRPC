const walletCommands = require('./services/walletCommands')
const apiController = require('./services/api.controller')

const getInfo = (coin) => {
    return walletCommands.getInfo(coin)
}

var walletConf = walletCommands.walletConf

exports.default = {
    walletCommands: walletCommands,
    getInfo: getInfo,
    walletConf: walletConf
}

exports.walletCommands = walletCommands
exports.getInfo = getInfo
exports.walletConf = walletConf

module.exports = exports