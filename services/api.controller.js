const command = require('../services/walletCommands')
const { success, error } = require('../models/ApiResponse')

const test = async (req, res) => {
    res.json(success())
}

const getBlockHeader = (req, res) => {

    command.getBlockHeader(req.params.coin, req.params.hash, req.params.verbose || false, (err, data) => {

        if (err) {
            res.json(error(err))
            return
        }

        res.json(success(data))
    })
}

const getBlockHash = (req, res) => {
    command.getBlockHash(req.params.coin, +req.params.blockId, (err, data) => {

        if (err) {
            res.json(error(err))
            return
        }

        res.json(success(data))
    })
}

const getInfo = (req, res) => {
    command.getInfo(req.params.coin, (err, data) => {

        if (err) {
            res.json(error(err))
            return
        }

        res.json(success(data))
    })
}

const getNewAddress = (req, res) => {
    command.getNewAddress(req.params.coin, (err, data) => {

        if (err) {
            res.json(error(err))
            return
        }

        res.json(success(data))
    })
}

module.exports = {
    test,
    getBlockHash,
    getBlockHeader,
    getInfo,
    getNewAddress
}
