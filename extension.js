// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

Object.defineProperty(exports,"__esModule", {value: true});

const vscode = require('vscode');
const assert = require('assert');
const sleep = require('util').promisify(setTimeout)
let ext = vscode.extensions.getExtension('cmstead.jsrefactor');
let api = ext.exports;
console.log(ext.isActive);
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**

 * @param {vscode.ExtensionContext} context
 */

function activate(context)
{
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {

		let uri = vscode.Uri.file('/home/rishabh/Desktop/A/refactor/testing_code/test.js');
		let p1 = new vscode.Position(0,0);
		let p2 = new vscode.Position(0,21);
		console.log(uri);
		var x = vscode.workspace.getWorkspaceFolder(uri);
		console.log(x);
		vscode.workspace.openTextDocument(uri).then((document) => {
			vscode.window.showTextDocument(document).then((editor) => {	
		  //let text = document.getText();
				//let edit2 = new vscode.WorkspaceEdit();
				//edit2.set(uri, [vscode.TextEdit.insert(new vscode.Position(0,0), "hello world")]);
				//vscode.workspace.applyEdit(edit2).then(value => {
					//console.log(value);
					//vscode.window.activeTextEditor.document.save();
					//console.log("we are in edit2");
					//console.log(document.isDirty);
					//console.log(document.isDirty);
					//console.log(document.eol, vscode.EndOfLine.CRLF);
					//console.log(document.getText());
					//vscode.workspace.saveAll(true).then((x1) => {
						//console.log(x1);
					let sel = new vscode.Selection(p1,p2);
					vscode.window.activeTextEditor.selection = sel;
					//console.log(vscode.window.activeTextEditor.selection);
					//vscode.window.activeTextEditor.document = document;
					//console.log(vscode.window.activeTextEditor.document.fileName);
				  	//console.log(edit.document.getText(sel));
				  	//edit.selection = sel;
				  	//console.log(vscode.workspace.name);
				  	//let replace = "this is successfully done!!!!";
				  	//console.log("hello");
				    /*edit.edit(editBuilder => {
				        editBuilder.replace(sel, replace);
					}).then((boool) => {
						console.log("hello");
						console.log(boool);
						edit.document.save();
					});*/
					
					/*vscode.commands.executeCommand(
				            'editor.action.rename',
				            [vscode.Uri.file('/app/testing_code/test3.ts'), new vscode.Position(1, 4)]
				        ).then((res) => {
				        	console.log(res);
				        	console.log(vscode.env.language);
				        	console.log("done!");
				        	edit.document.save();
				        });*/
				        //for(var i = 0;i<10000000000;i++);
				    
					vscode.commands.executeCommand('cmstead.jsRefactor.extractMethod').then((res) => {
						
						vscode.workspace.saveAll();
						console.log("done!");
						/*console.log("done!");
						
						edit2 = new vscode.WorkspaceEdit();
						console.log(vscode.window.activeTextEditor.document.getText());
						edit2.set(uri, [vscode.TextEdit.insert(new vscode.Position(0,0), "hello world")]);
						console.log(vscode.TextEdit.insert(new vscode.Position(0,0), "hello world"));
						/*vscode.workspace.applyEdit(edit2).then((value) => {
							console.log(value);
							console.log(vscode.window.activeTextEditor.document.getText());
						//console.log(edit.document.getText());
							vscode.workspace.saveAll(true).then((x) => {
								console.log(x);
								//sleep(3000);
							});
						}).catch (err => { console.log(err); console.log("error");}); */
						
					});
					//console.log("b");
				//});
			});
			//for(var i = 0;i<10000000000;i++);
			//console.trace();
			//return "hi";

		});
		return "hello";

	});

	context.subscriptions.push(disposable);

		

}
exports.activate = activate;

function deactivate() {}

exports.deactivate = deactivate;
//for(var i = 0;i<10000000000;i++);
  /*let sel = new vscode.Selection(p1,p2);
  let word = document.getText(sel);
  show = vscode.window.showTextDocument(document);
  console.log(word);
  let ren = vscode.RenameProvider.provideRenameEdits(document, p1, "maths",null);
  //console.log(ren);
  //let x = vscode.workspace.applyEdit(ren);
  //console.log(x);
  //document.save();
  console.log("hello");
});
*/
/*
console.log("hello");
vscode.commands.getCommands().then((data) => {
   
    for(var i =0;i<data.length;i++)
        console.log(data[i]);
});

vscode.commands.executeCommand('cmstead.jsRefactor.rename').then((x) => {

	console.log("hello");
	console.log(x);

});*/
//let open = vscode.workspace.openTextDocument(uri);
//let show = vscode.window.showTextDocument(open);
//console.log(show);
//console.log(vscode.workspace.textDocuments)
//let editor = vscode.window.activeTextEditor;
//let sel = new vscode.Selection(p1,p2);
//console.log(open,show,editor);