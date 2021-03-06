export class ServerClock {
    constructor(clockBlockKeys, clockBlockRange) {
        this.clockBlockKeys = clockBlockKeys
        this.clockBlockRange = clockBlockRange
    }

    setClock(clock) {
        this.d = this.localClock() - clock
    }

    localClock() {
        return Math.floor((new Date()).getTime() / 1000)
    }

    clock() {
        return this.localClock() - this.d
    }

    block() {
        return Math.floor(this.clock() / this.clockBlockRange)
    }

    blockKey(callback = null) {
        const key = this.clockBlockKeys[this.block() % this.clockBlockKeys.length]
        return callback ? callback(key) : key
    }
}

