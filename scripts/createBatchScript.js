const fs = require('fs');

/**
 * 
 * @param {Array} imgDesc an array of the image descriptions
 */
const createBatchScript = (imgDesc) => {
  const scriptHeader = `@echo off \necho starting a chain of image generation ... \n\nset root=C:\\Users\\Joshua\\Documents\\big-sleep \ncd %root%\n\n`;
  const scriptFooter = `\necho all image generations complete \nset /p DUMMY=Hit ENTER to continue...`;
  
  fs.writeFile(
    './batchScript.txt', // this is because the function is called from root folder
    scriptHeader,
    (data, err) => {
      if (err) {
        console.log({ err });
      }
    }
  );

  for (let i = 0; i < imgDesc.length; i++) {
    fs.appendFile(
      './batchScript.txt',
      `dream "${imgDesc[i]}" --epochs=5\n`,
      (data, err) => {
        if (err) {
          console.log({ err });
        }
      }
    );
  }

  fs.appendFile(
    './batchScript.txt',
    scriptFooter,
    (data, err) => {
      if (err) {
        console.log({ err });
      }
    }
  );
}


module.exports = {
  createBatchScript
}