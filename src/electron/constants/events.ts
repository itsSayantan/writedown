import { createWindow } from "../helpers/application-helpers";

export type VoidFunctionWithZeroArguments = () => void;

// This is an event that the electron main process receives from the react.js rebderer process.
// Since electron is listening to these events, it needs a callback which will get executed
// when the event is encountered.
export type IncomingEventObject = {
  name: string;
  callback: VoidFunctionWithZeroArguments;
};

// This is a event that the electron main process sends to the react.js renderer process.
// This event does not need a callback.
export type OutgoingEventObject = {
  name: string;
  args: Array<any>;
};

// Array of events that the electron 'app' will handle.
const appIncomingEvents: Array<IncomingEventObject> = [
  {
    name: "ready",
    callback: createWindow
  }
];

// Array of events that the electron 'app' will emit.
const appOutgoingEvents: Array<OutgoingEventObject> = [];

// Array of events that the ipc main process will handle.
const ipcMainIncomingEvents: Array<IncomingEventObject> = [];

// Array of events that the ipc main process will emit
const ipcMainOutgoingEvents: Array<OutgoingEventObject> = [
  {
    name: "NEW_SIGNAL_FROM_APPLICATION_MENU",
    args: []
  },
  {
    name: "SAVE_SIGNAL_FROM_APPLICATION_MENU",
    args: []
  }
];

export {
  appIncomingEvents,
  appOutgoingEvents,
  ipcMainIncomingEvents,
  ipcMainOutgoingEvents
};
