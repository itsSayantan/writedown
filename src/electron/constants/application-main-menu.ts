import { MenuItemConstructorOptions, BrowserWindow } from "electron";

import { ipcMainOutgoingEvents } from "./events";
import {
  emitNewSignalFromApplicationMenu,
  emitSaveSignalFromApplicationMenu
} from "../helpers/emitted-events";

const fileMenuItems = (
  writedownMainBrowserWindow: BrowserWindow
): Array<MenuItemConstructorOptions> => {
  return [
    {
      type: "normal",
      label: "New",
      toolTip: "Create a new file",
      accelerator: "Ctrl+N",
      click() {
        emitNewSignalFromApplicationMenu(
          ipcMainOutgoingEvents[0].name,
          writedownMainBrowserWindow,
          ipcMainOutgoingEvents[0].args
        );
      }
    },
    {
      type: "normal",
      label: "Save",
      toolTip: "Save the currently focussed file",
      accelerator: "Ctrl+S",
      click() {
        emitSaveSignalFromApplicationMenu(
          ipcMainOutgoingEvents[1].name,
          writedownMainBrowserWindow,
          ipcMainOutgoingEvents[1].args
        );
      }
    },
    {
      type: "separator"
    },
    {
      type: "normal",
      label: "Quit",
      toolTip: "Quit the application",
      role: "quit"
    }
  ];
};

export { fileMenuItems };
