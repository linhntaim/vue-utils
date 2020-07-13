export class AppOptions {
    constructor() {
        this.appOptions = {}
    }

    set(appOptions) {
        this.appOptions = appOptions ? appOptions : {}
        return this
    }

    get() {
        return this.appOptions
    }

    getBy(name, def = null) {
        return name in this.appOptions ? this.appOptions[name].value : def
    }

    setBy(name, value) {
        name in this.appOptions ?
            this.appOptions[name].value = value : this.appOptions[name] = {
                key: name,
                value: value,
            }
        return this
    }
}
