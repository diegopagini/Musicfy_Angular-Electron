import { app, BrowserWindow } from 'electron';

const url = require('url');
const path = require('path');

let mainWindow: BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 1000,
    title: 'Musicfy',
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `../dist/musicfy/index.html`),
      // protocol: 'file:',
      // slashes: true,
    })
  );

  /**
   * To open DevTools
   * mainWindow.webContents.openDevTools()
   */

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
