import * as vscode from 'vscode';

import { ShellScriptDocumentSymbolProvider } from './documentSymbolProvider';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.languages.registerDocumentSymbolProvider(
			[
				{ language: 'shellscript' },
			],
			new ShellScriptDocumentSymbolProvider()
		)
	);
}

export function deactivate() {
}