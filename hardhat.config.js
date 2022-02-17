require("@nomiclabs/hardhat-waffle")
require('hardhat-contract-sizer')
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      blockGasLimit: 20000000,
      timeout: 120000,
      gas: 'auto'
    },
    localhost: {
      timeout: 16000000
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      chainId: 80001,
      accounts: ['1302b7cfe701eba3bdcc30442c73fd080461e28778a2014ade2c6adeb3011b06']
    },
    maticMainnet: {
      url: 'https://polygon-rpc.com/',
      chainId: 137,
      accounts: ['1302b7cfe701eba3bdcc30442c73fd080461e28778a2014ade2c6adeb3011b06']
    },
    rinkeyby: {
      url: 'https://rinkeby.infura.io/v3/70cba8ba07c141449b9180f3bf39933f',
      chainId:4,
      accounts: ['1302b7cfe701eba3bdcc30442c73fd080461e28778a2014ade2c6adeb3011b06']
    }
  },
  solidity: {
    version: '0.8.7',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: './contracts',
    tests: './tests',
    cache: './cache',
    artifacts: './artifacts'
  },
  mocha: {
    timeout: 20000
  }
};