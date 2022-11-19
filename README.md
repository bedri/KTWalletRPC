# Kristal Teknoloji Wallet RPC Library

## Using in your project
1. Run `npm install @kristal/KTWalletRPC`
2. Example usage:
    ```javascript
        var ktWalletRPC = require('@kristal/kt-wallet-rpc')

        // Setting up Kyanite (KYAN) wallet rpc config.
        // Here the port is the rpcport in the wallet config file.
        ktWalletRPC.walletConf.KYAN = {
            protocol: 'http',
            host: '127.0.0.1',
            port: 7758,
            user: 'user',
            pass: 'pass'
        }

        var cb = (err, data) => {
            console.log(data)
        }

        ktWalletRPC.walletCommands.getInfo('KYAN', cb)

    ```
