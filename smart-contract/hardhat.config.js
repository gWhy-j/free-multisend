require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-foundry");
require('@typechain/hardhat');
require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-chai-matchers');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  paths: {
    sources: "./src",
    cache: "./out/hardhat/cache",
    artifacts: "./out/hardhat/artifacts",
  },
  typechain:{
    outDir: "/types",
    target: 'ethers-v6',
    alwaysGenerateOverloads: true,
  }
};
