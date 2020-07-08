import {Log} from './log'

export class ConsoleLog extends Log {
    send(something, namespace = null) {
        super.send(something, namespace)
    }
}
