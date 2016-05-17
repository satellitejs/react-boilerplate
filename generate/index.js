#!/usr/bin/env node

const commands = {
  component: require('./generators/component'),
  container: require('./generators/container'),
  reducer: require('./generators/reducer'),
  saga: require('./generators/saga'),
  selector: require('./generators/selector'),
  util: require('./generators/util'),

};

const helpCommand = require('./help');
helpCommand.fn = helpCommand.fn(commands);
commands.help = helpCommand;

const args = process.argv.slice(2);

if (!args[0]) {
  return commands.help.fn();
}

if (commands[args[0]] && commands[args[0]].fn && typeof commands[args[0]].fn === 'function') {
  const commandName = args.shift();
  return commands[commandName].fn(args);
}

const targetCommand = Object.keys(commands).map(function(commandName) { // eslint-disable-line func-names
  if (commands[commandName].alias === args[0]) {
    return commands[commandName];
  }
  return false;
}).filter(function(command) { // eslint-disable-line func-names
  return command;
});

if (targetCommand.length) {
  args.shift();
  return targetCommand[0].fn(args);
} else {
  return commands.help.fn();
}
