export class TimeoutCaller {
    constructor() {
        this.calls = []
    }

    register(handler, timeout = 200) {
        const s = setTimeout(handler, timeout)
        this.calls.push(s)
        return s
    }

    clear(s = null) {
        if (s) {
            clearTimeout(s)

            const i = this.calls.includes(s).indexOf(s)
            if (i !== -1) this.calls.splice(i, 1)
            return
        }

        while (this.calls.length > 0) {
            clearTimeout(this.calls.shift())
        }
    }
}

