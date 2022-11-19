const crypto = require('crypto')
const commands = require('services/walletCommands')

decode = (request, response) => {

    let jobj = {}//{random: "random", data:{ command:"getInfo", params:["SUV"]}} //p nin ilk elemani coin ticker mutlaka hepsinde olacak

    const pl = request.body.split('.')
    try {
        const decipher = crypto.createDecipheriv('aes-256-ctr', serverData.accessToken, Buffer.from(pl[1], 'hex'))
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(pl[0], 'hex')), decipher.final()])
        const afterToken = decrpyted.toString()
        const jstr = Buffer.from(afterToken, 'base64').toString()

        jobj = JSON.parse(jstr)
    } catch (err) {
        console.error(err)
        response.json(error('Parse error'))
        return
    }

    if(commands[jobj.data.command] === undefined || !Array.isArray(jobj.data.params) || jobj.data.params.length < 1) {
        response.json(error('Invalid command'))
        return
    }

    commands[jobj.data.command](...jobj.data.params,  (err, data) => {

        if (err) {
            console.log(err)
            response.json(error('Internal error'))
            return
        }

        let retData = Buffer.from(unescape(encodeURIComponent(JSON.stringify(data)))).toString('base64')

        const cipher = crypto.createCipheriv('aes-256-ctr', serverData.accessToken, Buffer.from(pl[1], 'hex'))
        const payload = Buffer.concat([cipher.update(retData), cipher.final()]).toString('hex')

        response.json(success(payload))
    })
}


const test = async (req, res) => {
    res.json(success())
}

const getBlockHeader = (req, res) => {

    commands.getBlockHeader(req.params.coin, req.params.hash, req.params.verbose || false, (err, data) => {

        if (err) {
            res.json(error(err))
            return
        }

        res.json(success(data))
    })
}

const getBlockHash = (req, res) => {
    commands.getBlockHash(req.params.coin, +req.params.blockId, (err, data) => {

        if (err) {
            res.json(error(err))
            return
        }

        res.json(success(data))
    })
}

const getInfo = (req, res) => {
    commands.getInfo(req.params.coin, (err, data) => {

        if (err) {
            res.json(error(err))
            return
        }

        res.json(success(data))
    })
}

const getNewAddress = (req, res) => {
    commands.getNewAddress(req.params.coin, (err, data) => {

        if (err) {
            res.json(error(err))
            return
        }

        res.json(success(data))
    })
}

module.exports = {
    decode,
    test,
    getBlockHash,
    getBlockHeader,
    getInfo,
    getNewAddress
}
