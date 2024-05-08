// Modules

// const {sayHello} = require('./helper');
//
// sayHello()

// ---

// Global variables

// __dirname
// __filename
// process.pwd()

// const {fn} = require('./helper');
// const helpers = require('./test/helper');
//
// console.log('dirname', __dirname)
// console.log('filename', __filename)
// console.log('process.pwd()', process.cwd())
//
// fn()
// helpers.fn()

// ---

// path
// const path = require('node:path');
//
// const joinedPath = path.join(__dirname, 'test', 'helper.js');
//
// const {fn} = require(joinedPath);
//
// console.log(joinedPath);
// fn()
//
//
// const normalizedPath = path.normalize('test/////test////helper.js ');
//
// console.log(normalizedPath);

// ---

// os

// const os = require("node:os");
//
// console.log(os.arch())
// console.log(os.cpus())

// ---

// fs
const path = require('node:path');
const fs = require('node:fs');

const pathTextFile = path.join(__dirname, 'text.txt');
const pathTextFile1 = path.join(__dirname, 'text1.txt');

fs.readFile(pathTextFile, {encoding: 'utf-8'}, (err, data) => {
    if (err) throw new Error('error');
    console.log(data)
})

fs.writeFile(pathTextFile, 'Hello, from node.js', (err) => {
    if (err) throw new Error('error');
})

fs.writeFile(pathTextFile1, 'some text', (err) => {
    if (err) throw new Error('error');
})
