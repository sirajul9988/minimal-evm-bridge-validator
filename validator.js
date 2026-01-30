const { ethers } = require("ethers");
const config = require("./bridge-config");

async function startValidator() {
    const sourceProvider = new ethers.WebSocketProvider(config.SOURCE_RPC);
    const destProvider = new ethers.JsonRpcProvider(config.DEST_RPC);
    const wallet = new ethers.Wallet(config.VALIDATOR_KEY, destProvider);

    const sourceContract = new ethers.Contract(config.SOURCE_BRIDGE_ADDR, config.BRIDGE_ABI, sourceProvider);
    const destContract = new ethers.Contract(config.DEST_BRIDGE_ADDR, config.BRIDGE_ABI, wallet);

    console.log("Validator active... Listening for Lock events on Source Chain.");

    sourceContract.on("Locked", async (user, amount, nonce) => {
        console.log(`Detected Lock: ${amount} tokens from ${user} (Nonce: ${nonce})`);

        try {
            console.log("Relaying to Destination Chain...");
            const tx = await destContract.mint(user, amount, nonce);
            const receipt = await tx.wait();
            console.log(`Bridge Success! Tx Hash: ${receipt.hash}`);
        } catch (error) {
            console.error("Relay failed:", error.reason || error.message);
        }
    });
}

startValidator().catch((err) => {
    console.error("Critical Validator Error:", err);
    process.exit(1);
});
