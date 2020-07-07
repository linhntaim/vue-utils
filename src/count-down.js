export default class CountDown {
    constructor(intervalCaller) {
        this.intervalCaller = intervalCaller
        this.reset()
    }

    reset() {
        this.counter = 0
        this.realCounter = 0
        this.callback = null
        this.enabled = false
    }

    start(counter, callback) {
        this.counter = counter
        this.realCounter = counter
        this.callback = callback
        this.enabled = true
        const i = this.intervalCaller.register(() => {
            --this.realCounter
            this.counter = this.realCounter > 0 ? this.realCounter : 1
            if (this.realCounter === 0) {
                this.callback()
            } else if (this.realCounter < 0) {
                this.intervalCaller.clear(i)
                this.reset()
            }
        }, 1000)
    }
}
