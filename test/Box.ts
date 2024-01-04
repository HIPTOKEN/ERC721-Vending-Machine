import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

// Start test block
describe("Box", function () {
  async function deploy() {
    const Box = await ethers.getContractFactory("Box");
    const box = await Box.deploy();

    return { Box, box };
  }

  describe("Deployment", () => {
    // Test case
    it("retrieve returns a value previously stored", async function () {
      const { Box, box } = await loadFixture(deploy);
      // Store a value
      await box.store(42);

      // Test if the returned value is the same one
      // Note that we need to use strings to compare the 256 bit integers
      expect((await box.retrieve()).toString()).to.equal("42");
    });
  });
});
