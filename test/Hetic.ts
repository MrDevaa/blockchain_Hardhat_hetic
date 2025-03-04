import {
    time,
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseGwei } from "viem";

describe("Hetic", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployErc20Fixture() {
      // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, otherAccount2] =
        await hre.viem.getWalletClients();

    const ERC20 = await hre.viem.deployContract("Hetic");

    const publicClient = await hre.viem.getPublicClient();

    return {
        ERC20,
        owner,
        otherAccount,
        otherAccount2,
        publicClient,
    };
    }

    describe("First test", function () {
    it("Should mint & transfer", async function () {
        const { ERC20, otherAccount, otherAccount2 } = await loadFixture(
        deployErc20Fixture
        );
    });
    });
});