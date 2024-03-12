const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const value = ethers.parseEther("0.01");
  const faucet = await ethers.deployContract("Faucet", { value });
  await faucet.waitForDeployment();
  console.log(`Faucet address: ${faucet.target} with balance: ${ethers.formatEther(value)}ETH`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// npx hardhat run ./scripts/deploy.js --network sepolia
// 0xe2e91dc8e91809580cc1711712b19974b0eade9c
