const { getImageDescById } = require('./scripts/getWords.js');

const main = async () => {
  await getImageDescById(1);
}

main();