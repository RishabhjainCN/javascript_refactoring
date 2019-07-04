/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
const assert = require('assert');
const vscode = require('vscode');
//let ext = vscode.extensions.getExtension('cmstead.jsrefactor');
//let api = ext.exports;
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// const vscode = require('vscode');
// const myExtension = require('../extension');

// Defines a Mocha test suite to group tests of similar kind together
console.log('it is xyz');
/*let success = vscode.commands.executeCommand('extension.helloWorld');*/
vscode.commands.getCommands().then((data) => {
   
    for(var i =0;i<data.length;i++)
        console.log(data[i]);
});
console.log('it is working');

