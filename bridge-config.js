module.exports = {
    SOURCE_RPC: "wss://eth-sepolia.g.alchemy.com/v2/your-api-key",
    DEST_RPC: "https://polygon-amoy.g.alchemy.com/v2/your-api-key",
    SOURCE_BRIDGE_ADDR: "0x...",
    DEST_BRIDGE_ADDR: "0x...",
    VALIDATOR_KEY: "0x...", // Validator private key
    BRIDGE_ABI: [
        "event Locked(address indexed user, uint256 amount, uint256 nonce)",
        "function mint(address user, uint256 amount, uint256 nonce) external"
    ]
};
