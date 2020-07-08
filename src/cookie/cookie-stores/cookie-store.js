export class CookieStore {
    constructor(cookieHandler, name, def = null) {
        this.cookieHandler = cookieHandler
        this.name = name
        this.value = null
        this.def = def
    }

    transform(value) {
        return value
    }

    retrieve() {
        if (this.value == null) {
            const value = this.cookieHandler.get(this.name)
            this.value = this.transform(value ? value : this.def)
        }
        return this.value
    }

    store(value, expires = 365) {
        this.value = this.transform(value)
        this.cookieHandler.set(this.name, this.value, expires)
        return this.value
    }

    remove() {
        this.cookieHandler.remove([this.name])
        this.value = null
    }
}
