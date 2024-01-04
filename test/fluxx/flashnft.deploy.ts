import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

// Start test block
describe("ERC721ATokenKlaytn", function () {
  async function deploy() {
    const Contract = await ethers.getContractFactory("ERC721ATokenKlaytn");
    const contract = await Contract.deploy("TEST", "TT", "1000");

    return { Contract, contract };
  }

  describe("Deployment", () => {
    // Test case
    it("retrieve returns a value previously stored", async function () {
      const { Contract, contract } = await loadFixture(deploy);

      expect((await contract.owner()).toString()).to.equal(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
      );
    });
  });
});
