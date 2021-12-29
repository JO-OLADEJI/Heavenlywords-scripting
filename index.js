const { getImageDescById } = require('./scripts/getWords.js');
const { createJSON } = require('./scripts/createMetaJson.js');
const { 
  pinFileToIPFS,
  pinJSONToIPFS,
  testAuthentication
} = require('./scripts/pinToIPFS.js');


/**
 * 
 * @param {Number} startID - the tokenID to start with
 * @param {Number} lastID - the last tokenID
 */
const generateJSON = async (startID, lastID) => {
  if (lastID <= startID) {
    console.log('Check Params !');
    return;
  }

  for (let i = startID; i <= lastID; i++) {
    await getImageDescById(i)
    .then((name) => {
      createJSON(i, name, './metadata');
    });
  }
}


const test = async () => {
  // generateJSON(1, 2);
  // await pinFileToIPFS('./images/banner.png');
  // const metadata = require('./metadata/1.json');
  // await pinJSONToIPFS(metadata);
  console.log('test!');
}
test();

// -> make the image url update in the respective json file
// -> batch the token IDs and their metadata link into different lists.
// -> make it ready for deployment