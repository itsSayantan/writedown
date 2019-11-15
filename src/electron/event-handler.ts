import { EventObject } from './events';

export default class EventHandler {
    static attachEvents(eventTarget: any, eventArray: Array<EventObject>) {
        for (let i = 0; i < eventArray.length; i++) {
            eventTarget.on(eventArray[i].name, eventArray[i].callback)
        }
    }
}