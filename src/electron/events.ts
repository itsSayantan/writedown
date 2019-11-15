import { createWindow } from './helpers';


export type Function1 = () => void

export interface EventObject {
    name: string,
    callback: Function1
}

const appEvents: Array<EventObject> = [
    {
        name: 'ready',
        callback: createWindow
    }
]

const events = {
    ...appEvents,
}

export {
    appEvents
}