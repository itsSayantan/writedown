import { BrowserWindow } from 'electron';
import * as isDev from 'electron-is-dev';

import { debuglog } from 'util';
import * as path from 'path';


const createWindow = () : void => {
    const log = debuglog('electron:createWindow')
    let writedownMainBrowserWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    log('window created')
    writedownMainBrowserWindow.loadURL(isDev ? 'http://localhost:8080' : `file://${path.join(__dirname, './dist/index.html')}`);
    // writedownMainBrowserWindow.loadFile("./dist/index.html");
}

export {
    createWindow
}