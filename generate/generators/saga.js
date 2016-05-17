const utils = require('../utils');

const BASE_DIR = './src/sagas';
const TEST_DIR = './src/sagas/test';

function generateSaga(args) {
  if (!args[0]) {
    return utils.printError('Invalid number of arguments. Must specify a name for the saga.');
  }

  if (!utils.checkDirectoryExists(BASE_DIR)) {
    return utils.printError(`Cannot find directory for sagas: ${BASE_DIR}`);
  }

  if (!utils.checkDirectoryExists(TEST_DIR)) {
    return utils.printError(`Cannot find directory for saga tests: ${TEST_DIR}`);
  }

  return utils.createFiles(BASE_DIR, [ `${args[0]}.js`, `test/${args[0]}.js` ]);
}

module.exports = {
  description: 'Creates a new saga.',
  alias: 'S',
  examples: ['saga MySaga', 'S MySaga'],
  fn: generateSaga,
};
