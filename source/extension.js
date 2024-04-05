import * as prettier from "prettier";
import * as vscode from "vscode";

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const markdownFormatter = vscode.languages.registerDocumentFormattingEditProvider(
    "markdown",
    {
      async provideDocumentFormattingEdits(document) {
        const range = new vscode.Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
        const content = document.getText(range);
        const formatted = await prettier.format(content, {
          parser: "markdown",
          proseWrap: "never",
          useTabs: false,
          tabWidth: 2,
          singleQuote: false,
          endOfLine: "lf",
          embeddedLanguageFormatting: "auto",
        });

        return [vscode.TextEdit.replace(range, formatted)];
      },
    },
  );

  context.subscriptions.push(markdownFormatter);
}

function deactivate() {}

export { activate, deactivate };
