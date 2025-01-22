
import * as vscode from 'vscode';

/* respect https://github.com/Gimly/vscode-fortran/blob/229cddce53a2ea0b93032619efeef26376cd0d2c/src/documentSymbolProvider.ts
           https://github.com/Microsoft/vscode/blob/34ba2e2fbfd196e2d6db5a4db0e42d03a97c655e/extensions/markdown-language-features/src/features/documentLinkProvider.ts
 */
export class ShellScriptDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

    public provideDocumentSymbols(
        document: vscode.TextDocument,
        token: vscode.CancellationToken): vscode.SymbolInformation[] {

        const tokenToKind = this.tokenToKind;

        const text = document.getText();
        const matchedList = this.matchAll(this.pattern, text);

        return matchedList.map((matched) => {
			const type = matched[8]+matched[10];
			const name = matched[6]+matched[12];
            const kind = tokenToKind[type];

            const position = document.positionAt(matched.index || 0);
            return new vscode.SymbolInformation(
                name,
                kind,
                '',
                new vscode.Location(document.uri, position)
            );
        });
    }

    // TODO: get the right icons
    private get tokenToKind(): { [name: string]: vscode.SymbolKind; } {
        return {
            '{': vscode.SymbolKind.Module,
            '(': vscode.SymbolKind.Interface,
            'MARK': vscode.SymbolKind.Constructor,
            'NOTE': vscode.SymbolKind.Field,
            'REVIEW': vscode.SymbolKind.Constant,
            'TODO': vscode.SymbolKind.TypeParameter,
            'FIXME': vscode.SymbolKind.Event,
            '!!!': vscode.SymbolKind.Event,
            '???': vscode.SymbolKind.Enum
        };
    }

    private get pattern() {
        return /^(([ \t]*)(function[ \t]+)?()()([_A-Za-z][_A-Za-z0-9]+)[ \t]*(\(\))+[ \t*]*([{\(])[^(]?|([ \t]*[#]+[ \t]+)(MARK|NOTE|REVIEW|TODO|FIXME|!!!|\?\?\?)(:[ \t]*)(.*)()())/gm;
    }

    private matchAll(
        pattern: RegExp,
        text: string
    ): Array<RegExpMatchArray> {
        const out: RegExpMatchArray[] = [];
        pattern.lastIndex = 0;
        let match: RegExpMatchArray | null;
        while ((match = pattern.exec(text))) {
            out.push(match);
        }
        return out;
    }
}
