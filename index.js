const { getImageDescById } = require('./scripts/getWords.js');
const { createJSON } = require('./scripts/createMetaJson.js');

/**
 * 
 * @param {Number} startID - the tokenID to start with
 * @param {Number} lastID - the last tokenID
 */
const main = async (startID, lastID) => {
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

main(1, 2);

// -> script art pinata upload
// -> make the image url update in the respective json file
// -> script  metadata pinata upload
// -> batch the token IDs and their metadata link into different lists.
// -> make it ready for deployment