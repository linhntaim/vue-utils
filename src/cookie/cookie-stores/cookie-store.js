export default class CookieStore {
    constructor(cookieHandler, name, def = null, disabled = false) {
        this.cookieHandler = cookieHandler
        this.name = name
        this.def = def
        this.disabled = disabled
    }

    retrieve() {
        if (this.disabled) return null
        const value = this.cookieHandler.get(this.name)
        return value ? value : this.def
    }

    store(data, expires = 365) {
        if (this.disabled) return null
        this.cookieHandler.set(this.name, data, expires)
        return data
    }

    remove() {
        this.cookieHandler.remove([this.name])
    }
}
