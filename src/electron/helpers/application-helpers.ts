import { BrowserWindow, Menu, nativeImage } from "electron";
import * as isDev from "electron-is-dev";

import { debuglog } from "util";
import * as path from "path";

import { fileMenuItems } from "../constants/application-main-menu";

const createApplicationMenu = (
  writedownMainBrowserWindow: BrowserWindow
): Menu => {
  return Menu.buildFromTemplate([
    {
      label: "File",
      submenu: fileMenuItems(writedownMainBrowserWindow)
    }
  ]);
};

const createWindow = (): void => {
  const log = debuglog("electron:application-helpers");
  let writedownMainBrowserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: nativeImage.createFromPath("./wd.png"),
    webPreferences: {
      nodeIntegration: true
    }
  });
  log("application-helpers->createWindow::window created");

  writedownMainBrowserWindow.maximize();
  writedownMainBrowserWindow.webContents.openDevTools();

  writedownMainBrowserWindow.loadURL(
    isDev
      ? "http://localhost:8080"
      : `file://${path.join(__dirname, "./dist/index.html")}`
  );

  Menu.setApplicationMenu(createApplicationMenu(writedownMainBrowserWindow));
};

export { createWindow };
