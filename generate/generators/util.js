const utils = require('../utils');

const BASE_DIR = './src/utils';
const TEST_DIR = './src/utils/test';

function generateUtil(args) {
  if (!args[0]) {
    return utils.printError('Invalid number of arguments. Must specify a name for the util.');
  }

  if (!utils.checkDirectoryExists(BASE_DIR)) {
    return utils.printError(`Cannot find directory for utils: ${BASE_DIR}`);
  }

  if (!utils.checkDirectoryExists(TEST_DIR)) {
    return utils.printError(`Cannot find directory for util tests: ${TEST_DIR}`);
  }

  return utils.createFiles(BASE_DIR, [ `${args[0]}.js`, `test/${args[0]}.js` ]);
}

module.exports = {
  description: 'Creates a new util.',
  alias: 'u',
  examples: ['util MyUtil', 'u MyUtil'],
  fn: generateUtil,
};
