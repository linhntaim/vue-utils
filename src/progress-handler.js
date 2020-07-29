export class ProgressHandler {
    constructor(ui, percentageTextTemplate = '{percent}%') {
        this.ui = ui
        this.percentageTextTemplate = percentageTextTemplate

        this.reset()
    }

    delayCompletion(delay = 500) {
        this.delay = delay

        return this
    }

    reset() {
        this.limit = 0
        this.current = 0
        this.percentage = 0
        this.completed = false
        this.delay = 500
        this.updatePercentageText()

        return this
    }

    increaseLimit(value) {
        if (value) {
            this.limit += value
            this.updateState()
        }

        return this
    }

    increaseCurrent(value) {
        if (value) {
            this.current += value
            this.updateState()
        }

        return this
    }

    run(executor, value = 1, increasedLimitValue = 0) {
        increasedLimitValue && this.increaseLimit(increasedLimitValue)

        new Promise(executor).then(() => {
            this.increaseCurrent(value)
        }).catch(() => {
            this.increaseLimit(-value)
        })

        return this
    }

    updatePercentage() {
        this.percentage = this.limit === 0 ? 0 : Math.round(this.current / this.limit * 100)
        return this
    }

    updatePercentageText() {
        this.percentageText = typeof this.percentageTextTemplate === 'function' ?
            this.percentageTextTemplate(this.percentage)
            : this.percentageTextTemplate.replace('{percent}', this.percentage)
        return this
    }

    updateCompleted() {
        setTimeout(() => this.completed = this.current === this.limit, this.delay)
        return this
    }

    updateState() {
        this.ui.waitRendering(() => {
            this.updatePercentage()
                .updatePercentageText()
                .updateCompleted()
        })
        return this
    }
}