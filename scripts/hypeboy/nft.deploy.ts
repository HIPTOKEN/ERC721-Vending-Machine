import { ethers, upgrades } from "hardhat";
import Dotenv from "dotenv";
import { BigNumber } from "ethers";

Dotenv.config();
const {
  ALCHEMY_URL,
  METAMASK_KEY,
  ALCHEMY_ARBITRUM_URL,
  ALCHEMY_ARBGOERLI_URL,
  ALCHEMY_GOERLI_URL,
  ALCHEMY_ETHEREUM_URL,
} = process.env;

const nftMintAmount = 100;
const to = "0xfcCb76765c0281b855BcAc04ca0970f38E45d440";

async function main() {
  let tx;
  const walletPrivateKey = METAMASK_KEY ?? "";

  const l1Provider = new ethers.providers.JsonRpcProvider(ALCHEMY_ETHEREUM_URL);

  const l1Wallet = new ethers.Wallet(walletPrivateKey, l1Provider);

  const L1NFT = (await ethers.getContractFactory("ERC721AToken")).connect(
    l1Wallet
  );
  const l1nft = await L1NFT.deploy();

  console.log(`deployed : ${l1nft.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
