import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/GcSK5QfitCMhRPERfliHTLccqMbQfu0X",
      // @ts-ignore
      accounts:[process.env.WALLET]
    }
  },
  etherscan:{
    apiKey: process.env.ETHERSCAN
  }
};

export default config;
