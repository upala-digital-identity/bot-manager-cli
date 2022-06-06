# Upala bot manager

Tools for Upala bot managers. Create, manage bots via command line or integrate with your software. The lib behind this CLI is [unique-human-lib](https://github.com/upala-digital-identity/unique-human-lib)

## Quickstart

Steps in this section will let you create your **bot army**! Use it to drain pools of the groups which you can get access to. Just trick their human verification methods. If you already know a group like that please welcome!

To list available commands use:

    node index.js -h

#### - initialize your bot army project

    node index.js init gnosis

See available networks in [Upala constants](https://github.com/upala-digital-identity/constants)

The command will create **config.json** file in the project root.

#### - modify config.js file

You may skip this step if you are ok with the generated seed and the network is xDai (Gnosis).

In other case modify the seed phrase and rpc endpoint (e.g. get your Rinkeby enpoint at [alchemy](https://www.alchemy.com/?r=e68b2f77-7fc7-4ef7-8e9c-cdfea869b9b5))

    {
      "chainId": 100,
      "mnemonic": "the seed phrase will be generated at initialization but use your own if you need",
      "ethNodeUrl": "https://rpc.gnosischain.com"
    }


#### - list your accounts

    node index.js list

This will give you an output like this:

    0: 0x1633092577b6e789863E8284d3db1393259e5D08, eth: 0.999020479997257344, dai: 0.0
    1: 0x8128729DacD29a7A00EFBc701F125631B6Bf37e0, eth: 0.099673443998476072, dai: 0.097
    2: 0x81293901281f9F7294DB21119504C6df6B0ce765, eth: 0.099699075998595688, dai: 0.097
    3: 0x00e23c8dE3f200fBB11267E27B6f2B682435dbE3, eth: 0.1, dai: 0.0
    4: 0x6D0264f9673f9539a12487658e5a433800A0299d, eth: 0.0, dai: 0.0

    ...

From left to right you got: 

- account id within your bot army
- Ethereum address of a bot
- eth balance (or xDai balance for Gnosis chain)
- dai balance (see [Upala constants](https://github.com/upala-digital-identity/constants) for DAI contracts)

#### - trick human verification method

#### - liquidate

    node index.js liquidate <id> <poolAddress> <scoreAssignedTo> <score> <bundleId> <proof>