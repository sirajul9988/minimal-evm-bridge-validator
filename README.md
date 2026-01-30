# Minimal EVM Bridge Validator

A high-performance Node.js service designed to facilitate cross-chain communication between two EVM-compatible blockchains. This repository serves as a professional template for understanding how centralized bridge relayers listen for lock events and validate them for destination execution.

## Core Logic
- **Listener**: Monitors a 'Lock' event on the Source Contract.
- **Signer**: Uses a secure private key to sign/send the 'Mint' transaction on the Destination Contract.
- **Provider Management**: Connects via WebSockets for real-time event streaming.

## Setup Instructions
1. Install dependencies: `npm install`
2. Configure RPC endpoints and contract addresses in `bridge-config.js`.
3. Start the validator: `node validator.js`

## Security Note
This implementation is for educational and expert-prototyping purposes. For production use, ensure the inclusion of multi-sig validation or decentralized consensus layers (like TSS).
