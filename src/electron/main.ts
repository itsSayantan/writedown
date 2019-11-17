import { app, ipcMain } from "electron";

import { appIncomingEvents, ipcMainIncomingEvents } from "./constants/events";
import EventHandler from "./event-handler";

// Attach the incoming events for both 'app' and 'ipcMain'
EventHandler.attachEvents(app, appIncomingEvents);
EventHandler.attachEvents(ipcMain, ipcMainIncomingEvents);
