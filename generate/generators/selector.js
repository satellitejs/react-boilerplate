const utils = require('../utils');

const BASE_DIR = './src/selectors';
const TEST_DIR = './src/selectors/test';

function generateSelector(args) {
  if (!args[0]) {
    return utils.printError('Invalid number of arguments. Must specify a name for the selector.');
  }

  if (!utils.checkDirectoryExists(BASE_DIR)) {
    return utils.printError(`Cannot find directory for selectors: ${BASE_DIR}`);
  }

  if (!utils.checkDirectoryExists(TEST_DIR)) {
    return utils.printError(`Cannot find directory for selector tests: ${TEST_DIR}`);
  }

  return utils.createFiles(BASE_DIR, [ `${args[0]}.js`, `test/${args[0]}.js` ]);
}

module.exports = {
  description: 'Creates a new selector.',
  alias: 's',
  examples: ['selector MySelector', 's MySelector'],
  fn: generateSelector,
};
