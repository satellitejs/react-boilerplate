const utils = require('../utils');

const BASE_DIR = './src/containers';

const CREATE_FILES = [
  'index.jsx',
  'index.test.js',
  'actions.js',
  'actions.test.js',
  'constants.js',
  'style.styl',
];

function generateContainer(args) {
  if (!args[0]) {
    return utils.printError('Invalid number of arguments. Must specify a name for the component.');
  }

  return utils.generate('container', utils.capitalizeFirstLetter(args[0]), BASE_DIR, CREATE_FILES);
}

module.exports = {
  description: 'Creates a new container.',
  alias: 'C',
  examples: ['container MyContainer', 'C MyContainer'],
  fn: generateContainer,
};
