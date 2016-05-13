const fs = require('fs');

function print(string) {
  console.log(string); // eslint-disable-line no-console
}

function printError(string) {
  console.error('Error:', string); // eslint-disable-line no-console
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createFile(path, filename) {
  fs.writeFile(`${path}/${filename}`, '', function(err) { // eslint-disable-line func-names
    if (err) {
      return print(`Could not create file: ${path}/${filename}`);
    }
    return print(`Created file: ${path}/${filename}`);
  });
}

function generate(type, name, dir, files) {
  const path = `${dir}/${name}`;
  try {
    fs.accessSync(path, fs.F_OK);
    return print(`${capitalizeFirstLetter(type)} named "${name}" already exists.`);
  } catch (e) {
    // It isn't accessible
    print(`Creating a new ${type}: ${name}`);
    fs.mkdir(path, function() { // eslint-disable-line func-names
      print(`Created directory: ${path}`);
      files.forEach(function(filename) { // eslint-disable-line func-names
        createFile(path, filename);
      });
    });
  }
}


module.exports = {
  print: print,
  printError: printError,
  capitalizeFirstLetter: capitalizeFirstLetter,
  generate: generate,
};
