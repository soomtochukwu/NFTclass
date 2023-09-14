import { ethers } from "hardhat";

async function main() {
  const
  nftContrat = await ethers.deployContract("BcUNN"),
  [owner] = await ethers.getSigners();
  await nftContrat.waitForDeployment();

  const IPFS = "QmdEbW885RBAfFc51EXSZkXEgYA5Hb3kNmVk4gCiVeV4vR",
  mintNFT = await nftContrat.safeMint(owner.address, IPFS)
  console.log(`
  CONTRACT DEPLOYED.
  >>NFT address ${mintNFT.to}
  >>deployer address ${mintNFT.from}
  `);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
