import { app } from 'electron';

import { appEvents } from './events';
import EventHandler from './event-handler';

EventHandler.attachEvents(app, appEvents)
console.log(app)