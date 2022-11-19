const walletCommands = require('./services/walletCommands')

const getInfo = (coin) => {
    return walletCommands.getInfo(coin)
}

var walletConf = walletCommands.walletConf

exports.default = {
    walletCommands: walletCommands,
    getinfo: getInfo,
    walletConf: walletConf
}

exports.walletCommands = walletCommands
exports.getinfo = getInfo
exports.walletConf = walletConf

module.exports = exports