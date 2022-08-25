"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var url = require('url');
var path = require('path');
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 1500,
        height: 1000,
        title: 'Musicfy',
        titleBarStyle: 'hiddenInset',
        // kiosk: true
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "../../dist/musicfy/index.html"),
        // protocol: 'file:',
        // slashes: true,
    }));
    /**
     * To open DevTools
     * mainWindow.webContents.openDevTools()
     */
    mainWindow.setMenu(null); // To avoid showing a menu
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
electron_1.app.on('activate', function () {
    if (mainWindow === null)
        createWindow();
});
//# sourceMappingURL=main.js.map