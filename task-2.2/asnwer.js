const { readFile, writeFile } = require('node:fs')

function read(filename, cb) {
  return readFile(filename, cb)
}

function write(filename, content) {
  return writeFile(filename, content)
}

function answer(file1, file2, file3) {

}
