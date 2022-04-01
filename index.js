#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const { 
    getConfig,
    initHandler,
    registerHandler,
    listHandler,
    explodeHandler } = require('./handlers.js')

const config = getConfig()

program.version('0.0.1');

program
    .command('init')
    .description('Creates config file and generates wallets')
    .argument('<network>', 'Network by name (e.g. rinkeby)') // TODO
    .action(function (network) {
        initHandler(config, network);
});

program
    .command('register')
    .description('Register Upala id')
    .action(async function () {
        registerHandler(config)
    })

// todo list UpalaId
// todo list rewards for a pool
// list dai balance
program
    .command('list')
    .description('List accounts under control')
    .action(async function () {
        await listHandler(config)
    })

// Will search for corresponding UpalaID (or will register one if necessary)
// todo automatically pull score, bundleId, proof when graph or score explorer are ready
program
    .command('explode')
    .description('Explode bot and get reward')
    .argument('<poolAddress>', 'Pool address to attack')
    .argument('<scoreAssignedTo>', 'Score bearing address')
    .argument('<score>', 'Score assigned to the address')
    .argument('<bundleId>', 'Bundle ID')
    .argument('<proof>', 'Proof that address-score pair belongs to the Bundle ID')
    .action(function (poolAddress, scoreAssignedTo, score, bundleId, proof) {
        explodeHandler(config, poolAddress, scoreAssignedTo, score, bundleId, proof);
    })

program.parse(process.argv);
