import { ICommandPalette, showDialog, Dialog } from '@jupyterlab/apputils';
import { JupyterFrontEnd } from '@jupyterlab/application';
import { Widget } from '@lumino/widgets';

export function activate(app: JupyterFrontEnd, palette: ICommandPalette): void {
  app.commands.addCommand('plotly-extension:open-dialog', {
    label: 'plotly-extension:open-dialog',
    execute: () => {
      const inputWidget = new InputWidget();

      showDialog({
        title: 'Plotly Open Dialog',
        body: inputWidget,
        buttons: [Dialog.cancelButton(), Dialog.okButton()]
      }).then(result => {
        if (result.button.accept) {
          const enteredText = inputWidget.getValue();
          showDialog({
            title: 'You Entered:',
            body: enteredText,
            buttons: [Dialog.okButton()]
          });
        }
      });
    }
  });

  palette.addItem({
    command: 'plotly-extension:open-dialog',
    category: 'Extensions'
  });
}

export class InputWidget extends Widget {
  private inputElement: HTMLInputElement;

  constructor() {
    super({ node: document.createElement('div') });
    this.addClass('input-widget');

    this.inputElement = document.createElement('input');
    this.inputElement.type = 'text';

    this.node.appendChild(this.inputElement);
  }

  getValue(): string {
    return this.inputElement.value;
  }
}
