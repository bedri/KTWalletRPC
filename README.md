# Kristal Teknoloji Wallet RPC Library

## Standalone Installation
1. Move or copy `config/walletConf.js.example` to `config/walletConf.js`
2. run `npm install`


## Using in your project
1. run `npm install --save @kristal/KTWalletRPC`
2. Move or copy `config/walletConf.js.example` to `config/walletConf.js` and edit `config/walletConf.js` to setup the wallet connection parameters.
3. Example usage:
    ```javascript
    import KTWalletRPC from 'KTWalletRPC'

    KTWalletRPC.