import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

// Start test block
describe("ERC721AToken", function () {
  async function deploy() {
    const Contract = await ethers.getContractFactory("ERC721AToken");
    const contract = await Contract.deploy("TEST", "TT", "1000");

    return { Contract, contract };
  }

  describe("Deployment", () => {
    // Test case
    it("retrieve returns a value previously stored", async function () {
      const { Contract, contract } = await loadFixture(deploy);
      // Store a value
      //   await contract.airdro

      // Test if the returned value is the same one
      // Note that we need to use strings to compare the 256 bit integers
      expect((await contract.owner()).toString()).to.equal(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
      );
    });
  });
});
