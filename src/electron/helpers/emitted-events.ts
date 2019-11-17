import { ipcMain, BrowserWindow } from "electron";
import { debuglog } from "util";

const log = debuglog("electron:emitted-events");

const emitNewSignalFromApplicationMenu = (
  eventString: string,
  writedownMainBrowserWindow: BrowserWindow,
  args: Array<any>
) => {
  log("electron:emitted-events->emitNewSignalFromApplicationMenu::event fired");
  writedownMainBrowserWindow.webContents.send(eventString);
};

const emitSaveSignalFromApplicationMenu = (
  eventString: string,
  writedownMainBrowserWindow: BrowserWindow,
  args: Array<any>
) => {
  log(
    "electron:emitted-events->emitSaveSignalFromApplicationMenu::event fired"
  );
  writedownMainBrowserWindow.webContents.send(eventString);
};

export { emitNewSignalFromApplicationMenu, emitSaveSignalFromApplicationMenu };
