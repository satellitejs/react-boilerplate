const utils = require('./utils');

const COMMAND_PREFIX = 'npm run generate';

function createUsageText(commandList, commandDescriptions, commandExamples) {
  return 'Usage: ' + COMMAND_PREFIX + ' <command> ...args\n' +
  '\n' +
  'where <command> is one of:\n' +
  '    ' + commandList.join(', ') + '\n' +
  '\n' +
  'Commands:\n' +
  commandDescriptions.join('\n') + '\n' +
  '\n' +
  'Examples:\n' +
  commandExamples.join('\n');
}

function helpCommand(commands) {
  return function help() {

    const commandList = [];
    const commandDescriptions = [];
    const commandExamples = [];
    Object.keys(commands).forEach(function(command) { // eslint-disable-line func-names
      commandList.push(command);
      commandDescriptions.push(`    ${command}${commands[command].alias ? ` (alias: ${commands[command].alias})` : ''} - ${commands[command].description}`);
      if (command.length !== 1) {
        commands[command].examples.forEach(function(example) { // eslint-disable-line func-names
          commandExamples.push(`    ${COMMAND_PREFIX} ${example}`);
        });
      }
    });

    utils.print(createUsageText(commandList, commandDescriptions, commandExamples));
  };
}

module.exports = {
  description: 'Displays command usage.',
  examples: ['help'],
  fn: helpCommand,
};
