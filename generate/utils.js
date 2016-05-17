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

function createFiles(path, filenames) {
  filenames.forEach(function(filename) { // eslint-disable-line func-names
    createFile(path, filename);
  });
}

function createDirectory(path, dirname) {
  fs.mkdir(`${path}/${dirname}`, function(err) { // eslint-disable-line func-names
    if (err) {
      return print(`Could not create directory: ${path}/${dirname}/`);
    }
    return print(`Created directory: ${path}/${dirname}/`);
  });
}

function createDirectories(path, dirnames) {
  dirnames.forEach(function(dirname) { // eslint-disable-line func-names
    createDirectory(path, dirname);
  });
}

function checkDirectoryExists(path) {
  try {
    fs.accessSync(path, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function generateWithDirectory(type, name, dir, filenames, dirnames) {
  const path = `${dir}/${name}`;
  try {
    fs.accessSync(path, fs.F_OK);
    return print(`${capitalizeFirstLetter(type)} named "${name}" already exists.`);
  } catch (e) {
    // It isn't accessible
    print(`Creating a new ${type}: ${name}`);

    fs.mkdir(path, function() { // eslint-disable-line func-names
      print(`Created directory: ${path}`);

      if (dirnames && dirnames.length) {
        createDirectories(path, dirnames);
      }

      createFiles(path, filenames);
    });
  }
}

module.exports = {
  print: print,
  printError: printError,
  capitalizeFirstLetter: capitalizeFirstLetter,
  checkDirectoryExists: checkDirectoryExists,
  createFile: createFile,
  createFiles: createFiles,
  createDirectory: createDirectory,
  createDirectories: createDirectories,
  generateWithDirectory: generateWithDirectory,
};
