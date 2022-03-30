const fs = require('fs')
const path = require('path')
const { ethers, utils } = require('ethers')
const { newIdentity } = require('@upala/unique-human')

// TODO 
// check transaction mining for transaction commands (withdraw, setBaseScore)

// SETUP AND INITIALIZATION 

function getConfig() {
    try {
        return JSON.parse(fs.readFileSync('config.json'))
    } catch {
        return null
    }
}

function saveNewConfig(newConfig) {
    fs.writeFileSync('config.json', JSON.stringify(newConfig, null, 2))
}

function getWallet(config) {
    const provider = new ethers.providers.JsonRpcProvider(config.ethNodeUrl)
    return ethers.Wallet.fromMnemonic(config.mnemonic).connect(provider)
}


// HANDLERS

function initHandler(config, network) {
    if (config != null) { throw new Error("Config already exists")}

    let networkID
    if (network == '4' || network == "Rinkeby" || network == "Rinkeby") networkID = 4
    if (network == '31337' || network == 'local') networkID = 31337

    const initialConfig = {
        chainId: networkID, // todo put rinkeby here (change to local for dev)
        mnemonic: 'test test test test test test test test test test test junk',
        ethNodeUrl: 'http://localhost:8545',  // use infura or alchemy here
    }
    fs.writeFileSync('config.json', JSON.stringify(initialConfig, null, 2))
}

async function registerHandler(config) {
    if (config == null) { throw new Error('No config run \"init\" first.') }
    console.log('Not inmplemented yet. Use explode command for now. It will take care for id registration')
}

async function listHandler(config) {
    if (config == null) { throw new Error('No config run \"init\" first.') }
    let wallet = getWallet(config)
    console.log(wallet.address)
}

async function explodeHandler(config, poolAddress, score, bundleId, proof) {
    if (config == null) { throw new Error('No config run \"init\" first.') }
    const wallet = getWallet(config)
    attackPayload = {
        score: score, 
        bundleId: bundleId, 
        proof: proof
    }
    let tx = await explode(wallet, poolAddress, attackPayload, upalaConstants)
    console.log("Exploded. Transaction hash: %s", tx)
}

module.exports = {
    getConfig,
    initHandler,
    registerHandler,
    listHandler,
    explodeHandler
}