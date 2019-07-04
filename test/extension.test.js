/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//
Object.defineProperty(exports,"__esModule", {value: true});
// The module 'assert' provides assertion methods from node
const assert = require('assert');
const vscode = require('vscode');
//const x = require('./xyz');
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// const vscode = require('vscode');
// const myExtension = require('../extension');

// Defines a Mocha test suite to group tests of similar kind together
console.log('it is working');
test("testing 1" ,async function(){
	//let success = await vscode.commands.executeCommand('extension.helloWorld');
	await vscode.commands.executeCommand('extension.helloWorld').then((success) => {
		console.log(success);
		console.log('it is not working');
		vscode.workspace.saveAll();
	});
	console.log("hello");
});
	
/*vscode.commands.getCommands().then((data) => {

	if(data.indexOf('extension.helloWorld') >= 0)
		console.log("badia");
	//console.log(data);
});*/
