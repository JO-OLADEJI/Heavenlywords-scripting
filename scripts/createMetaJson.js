const fs = require('fs');

/**
 * 
 * @param {Number} tokenID 
 * @param {String} imageDesc 
 * @param {String} relativePath - relative path to the file the fuction is being used
 */
const createJSON = async (tokenID, imageDesc, relativePath) => {
  const metadata = {
    "name":"",
    "description":"",
    "image":""
  }

  metadata.name = imageDesc.toLowerCase();
  metadata.description = `Heavenlywords #${tokenID}`;

  try {
    fs.writeFile(
      `${relativePath}/${tokenID}.json`,
      JSON.stringify(metadata), 
      (data, err) => {
        if (err) {
          console.log(err);
        }
        console.log(`${tokenID}.json created successfully ✔`);
      }
    );
  }
  catch (err) {
    console.log(err);
  }
}

// createJSON(1, 'testing microphone');

module.exports = {
  createJSON
}