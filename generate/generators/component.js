const utils = require('../utils');

const BASE_DIR = './src/components';

const CREATE_FILES = [
  'index.jsx',
  'index.test.js',
  'style.styl',
];

function generateComponent(args) {
  if (!args[0]) {
    return utils.printError('Invalid number of arguments. Must specify a name for the component.');
  }

  return utils.generate('component', utils.capitalizeFirstLetter(args[0]), BASE_DIR, CREATE_FILES);
}

module.exports = {
  description: 'Creates a new component.',
  alias: 'c',
  examples: ['component MyComponent', 'c MyComponent'],
  fn: generateComponent,
};
