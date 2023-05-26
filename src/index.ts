import { JupyterFrontEndPlugin } from '@jupyterlab/application';
import { ICommandPalette } from '@jupyterlab/apputils';
import { activate } from './opendialog';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'plotly-extension',
  autoStart: true,
  requires: [ICommandPalette],
  activate: activate
};

export default extension;
