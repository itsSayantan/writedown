import { BrowserWindow, dialog } from "electron";
import { debuglog } from "util";
import * as os from "os";

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
  const path = dialog.showSaveDialogSync({
    buttonLabel: "Save 123",
    defaultPath: os.homedir(),
    message: " Save your file",
    title: "File saver"
  });
  writedownMainBrowserWindow.webContents.send(eventString, path);
};

export { emitNewSignalFromApplicationMenu, emitSaveSignalFromApplicationMenu };
