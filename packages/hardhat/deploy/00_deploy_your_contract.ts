import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
// import { Contract } from "ethers";

// Update with your Batch number
// const BATCH_NUMBER = "14";

/**
 * Deploys a contract named "deployYourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */

  if (hre.network.name !== "arbitrum") {
    console.log("Skipping deployment: not on Arbitrum network");
    return;
  }

  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // await deploy("BatchRegistry", {
  //   from: deployer,
  //   // Contract constructor arguments
  //   // args: [deployer, BATCH_NUMBER],
  //   args: ["0xb729cC5460A8affD12a5Dd5d4ee8258150B68131", BATCH_NUMBER],
  //   // args: [0xcC6eDeB501BbD8AD9E028BDe937B63Cdd64A1D91, BATCH_NUMBER],
  //   log: true,
  //   // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //   // automatically mining the contract deployment transaction. There is no effect on live networks.
  //   autoMine: true,
  // });

  // Get the deployed contract to interact with it after deploying.
  // const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
  // const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", "0xb729cC5460A8affD12a5Dd5d4ee8258150B68131");
  // console.log("\nBatchRegistry deployed to:", await batchRegistry.getAddress());
  // console.log("Remember to update the allow list!\n");

  // // The GraduationNFT contract is deployed on the BatchRegistry constructor.
  // const batchGraduationNFTAddress = await batchRegistry.batchGraduationNFT();
  // console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");

  await deploy("CheckIn", {
    from: deployer,
    // args: [await batchRegistry.getAddress()],
    args: ["0x47FD1Ff08476d7c7196089D4f5BcabbED4f4ddbE"],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["CheckIn"];
