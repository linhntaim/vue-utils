export class CallbackWaiter {
    constructor() {
        this.waiters = {}
    }

    call(id, callback, time = 10, replaceCallback = null) {
        if (!(id in this.waiters)) {
            this.waiters[id] = {
                callback: callback,
                time: time,
                replaceCallback: replaceCallback,
            }
        }
        if (this.waiters[id].time === time) {
            callback()
        } else {
            replaceCallback && replaceCallback()
        }
        if (--this.waiters[id].time === 0) {
            delete this.waiters[id]
        }
    }

    remove(id) {
        delete this.waiters[id]
    }
}

