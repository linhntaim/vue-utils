export class Loader {
    constructor(settings = {}) {
        this.loaded = false
        this.settings = settings
    }

    set(settings = {}) {
        Object.assign(this.settings, settings)
        return this
    }

    load(resolve) {
        this.loaded = true
        resolve()
    }

    remove() {
        this.loaded = false
    }

    reload() {
        this.remove()
        return new Promise(resolve => this.load(resolve))
    }

    safeLoad() {
        if (!this.loaded) {
            return new Promise(resolve => this.load(resolve))
        }
        return new Promise(resolve => resolve())
    }

    safeRemove() {
        if (this.loaded) {
            this.remove()
        }
    }
}
