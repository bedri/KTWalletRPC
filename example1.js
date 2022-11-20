const { timeout } = require('async')
var ktWalletRPC = require('@kristal/kt-wallet-rpc')

ktWalletRPC.walletConf.KYAN = {
    protocol: 'http',
    host: '127.0.0.1',
    port: 1111,
    user: 'user',
    pass: 'pass'
}

var cb = (err, data) => {
    console.log(data)
}

ktWalletRPC.walletCommands.getInfo('KYAN', cb)




