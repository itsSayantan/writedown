import { app } from "electron";

import { appEvents } from "./constants/events";
import EventHandler from "./event-handler";

EventHandler.attachEvents(app, appEvents);
