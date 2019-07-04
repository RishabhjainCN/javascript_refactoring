// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

Object.defineProperty(exports,"__esModule", {value: true});


const vscode = require('vscode');
const assert = require('assert');
const sleep = require('util').promisify(setTimeout)
const fs = require('fs');


let ext = vscode.extensions.getExtension('cmstead.jsrefactor');
let api = ext.exports;
console.log(ext.isActive);
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**

 * @param {vscode.ExtensionContext} context
 */

async function activate(context)
{
	let disposable = await vscode.commands.registerCommand('jcnu.refactor.extractMethod', async function(x) {
		var json = fs.readFileSync("./input.txt").toString();
		var obj = JSON.parse(json);
		var filePath = obj["file"];
		var startline = obj["startline"]; 
		var startcol = obj["startcol"];
		var endline = obj["endline"];
		var endcol = obj["endcol"];
		let uri = vscode.Uri.file(filePath);
		let p1 = new vscode.Position(startline, startcol);
		let p2 = new vscode.Position(endline, endcol);
		await vscode.workspace.openTextDocument(uri).then( async function(document) {
			await vscode.window.showTextDocument(document).then( async function (editor) {	
				let sel = new vscode.Selection(p1,p2);
				vscode.window.activeTextEditor.selection = sel;
				var res = await vscode.commands.executeCommand('cmstead.jsRefactor.extractMethod');
			});
		});

	});
	context.subscriptions.push(disposable);

	disposable = await vscode.commands.registerCommand('jcnu.refactor.extractVariable', async function(x) {
		var json = fs.readFileSync("./input.txt").toString();
		var obj = JSON.parse(json);
		var filePath = obj["file"];
		var startline = obj["startline"]; 
		var startcol = obj["startcol"];
		var endline = obj["endline"];
		var endcol = obj["endcol"];
		let uri = vscode.Uri.file(filePath);
		let p1 = new vscode.Position(startline, startcol);
		let p2 = new vscode.Position(endline, endcol);
		await vscode.workspace.openTextDocument(uri).then( async function(document) {
			await vscode.window.showTextDocument(document).then( async function (editor) {	
				let sel = new vscode.Selection(p1,p2);
				vscode.window.activeTextEditor.selection = sel;
				var res = await vscode.commands.executeCommand('cmstead.jsRefactor.extractVariable');
			});
		});

	});
	context.subscriptions.push(disposable);

	disposable = await vscode.commands.registerCommand('jcnu.refactor.addExport', async function(x) {
		var json = fs.readFileSync("./input.txt").toString();
		var obj = JSON.parse(json);
		var filePath = obj["file"];
		var startline = obj["startline"]; 
		var startcol = obj["startcol"];
		var endline = obj["endline"];
		var endcol = obj["endcol"];
		let uri = vscode.Uri.file(filePath);
		let p1 = new vscode.Position(startline, startcol);
		let p2 = new vscode.Position(endline, endcol);
		await vscode.workspace.openTextDocument(uri).then( async function(document) {
			await vscode.window.showTextDocument(document).then( async function (editor) {	
				let sel = new vscode.Selection(p1,p2);
				vscode.window.activeTextEditor.selection = sel;
				var res = await vscode.commands.executeCommand('cmstead.jsRefactor.addExport');
			});
		});

	});
	context.subscriptions.push(disposable);

	disposable = await vscode.commands.registerCommand('jcnu.refactor.convertToArrowFunction', async function(x) {
		var json = fs.readFileSync("./input.txt").toString();
		var obj = JSON.parse(json);
		var filePath = obj["file"];
		var startline = obj["startline"]; 
		var startcol = obj["startcol"];
		var endline = obj["endline"];
		var endcol = obj["endcol"];
		let uri = vscode.Uri.file(filePath);
		let p1 = new vscode.Position(startline, startcol);
		let p2 = new vscode.Position(endline, endcol);
		await vscode.workspace.openTextDocument(uri).then( async function(document) {
			await vscode.window.showTextDocument(document).then( async function (editor) {	
				let sel = new vscode.Selection(p1,p2);
				vscode.window.activeTextEditor.selection = sel;
				var res = await vscode.commands.executeCommand('cmstead.jsRefactor.convertToArrowFunction');
			});
		});

	});
	context.subscriptions.push(disposable);
		

}
exports.activate = activate;

function deactivate() {}

exports.deactivate = deactivate;
