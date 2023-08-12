require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');


const privateKeys = [
  process.env.PRIVATE_KEY_0,
  process.env.PRIVATE_KEY_1,
];

const infuraKey = process.env.INFURA_KEY;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 9545
    },
    goerli: {
      provider: () => new HDWalletProvider(process.env.SECRET_KEY, `https://goerli.infura.io/v3/${infuraKey}`),
      network_id: 5, // Goerli's id
      gas: 5500000, // Gas limit - set it to your contract needs
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
    },
  }
};
