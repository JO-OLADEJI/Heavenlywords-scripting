# Heavenlywords Scripting
Scripting for automating the process of the Heavenlywords NFT reveal.

### Instructions
- Clone the repo by running the following command in cmd:
```bash
git clone https://github.com/Joshua-Oladeji/Heavenlywords-scripting.git
```

- Change directory to the folder and install dependencies:
```bash
cd Heavenlywords-scripting
npm install
```

- Create a .env file and update the following:
```
ALCHEMY_URL = "" # mainnet blockchain link from your app on alchemy
SENDER = "" # the value of msg.sender when a function is called on the blockchain
CONTRACT_ADDRESS = "0x58c14f43cbc58cb7bf641c521e2360941f957bf9" # contract address of Heavenlywords smart contract
```

- Tweak the parameters of the **main()** function in the index.js file (to suit yourself 😀
- Create a directory named **metadata** in the root folder of the project
- Finally, start the script:
```bash
npm run start
```

### Technologies
- [Node.js](https://nodejs.org/en/) ✨
- [Alchemy](https://www.alchemy.com/)