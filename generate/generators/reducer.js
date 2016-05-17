const utils = require('../utils');

const BASE_DIR = './src/reducers';
const TEST_DIR = './src/reducers/test';

function generateReducer(args) {
  if (!args[0]) {
    return utils.printError('Invalid number of arguments. Must specify a name for the reducer.');
  }

  if (!utils.checkDirectoryExists(BASE_DIR)) {
    return utils.printError(`Cannot find directory for reducers: ${BASE_DIR}`);
  }

  if (!utils.checkDirectoryExists(TEST_DIR)) {
    return utils.printError(`Cannot find directory for reducer tests: ${TEST_DIR}`);
  }

  return utils.createFiles(BASE_DIR, [ `${args[0]}.js`, `test/${args[0]}.js` ]);
}

module.exports = {
  description: 'Creates a new reducer.',
  alias: 'r',
  examples: ['reducer MyReducer', 'r MyReducer'],
  fn: generateReducer,
};
