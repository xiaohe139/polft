require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("ethereum-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy-ethers");
require("@nomiclabs/hardhat-solhint");
require("@nomiclabs/hardhat-web3");
require("dotenv/config");
require("hardhat-deploy");
require("hardhat-preprocessor");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-gas-reporter");
require("@nomicfoundation/hardhat-chai-matchers");

const Secrets = require("./secrets");

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      viaIR: false,
      optimizer: {
        enabled: true,
        runs: 200,
      },
      metadata: {
        bytecodeHash: "none",
      },
    },
  },
  networks: {
    assethub: {
      url: "https://westend-asset-hub-eth-rpc.polkadot.io",
      chainId: 420420421,
      accounts: [''],
      allowUnlimitedContractSize: true,
    },
    amoy: {
      url: 'https://polygon-amoy.blockpi.network/v1/rpc/public',
      chainId: 80002,
      accounts: [''],
      allowUnlimitedContractSize: true,
    },
    moon: {
      url: 'https://rpc.testnet.moonbeam.network',
      chainId: 1287,
      accounts: ['']
    },
    local: {
      url: 'http://127.0.0.1:8545',
      chainId: 1337,
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],
    },
  }
};
