import { ipcMain } from "electron";
import { debuglog } from "util";

const log = debuglog("electron:emitted-events");

const emitNewSignalFromApplicationMenu = (
  eventString: string,
  args: Array<any>
) => {
  log("electron:emitted-events->emitNewSignalFromApplicationMenu::event fired");
  ipcMain.emit(eventString);
};

const emitSaveSignalFromApplicationMenu = (
  eventString: string,
  args: Array<any>
) => {
  log(
    "electron:emitted-events->emitSaveSignalFromApplicationMenu::event fired"
  );
  ipcMain.emit(eventString);
};

export { emitNewSignalFromApplicationMenu, emitSaveSignalFromApplicationMenu };
