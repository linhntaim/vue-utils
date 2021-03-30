export class CookieStore {
    /**
     *
     * @param {CookieStoreHandler} cookieStoreHandler
     * @param {String} name
     * @param {Object|String} def
     */
    constructor(cookieStoreHandler, name, def = null) {
        this.cookieStoreHandler = cookieStoreHandler
        this.name = name
        this.value = null
        this.def = def
    }

    retrieveTransform(value) {
        return value
    }

    storeTransform(value) {
        return value
    }

    retrieve() {
        if (this.value == null) {
            const value = this.cookieStoreHandler.getJson(this.name)
            this.value = this.retrieveTransform(value ? value : this.def)
        }
        return this.value
    }

    store(value, expires) {
        this.value = this.storeTransform(value)
        this.cookieStoreHandler
            .setTemporarySettings({
                expires: expires ? expires : new Date(new Date().getTime() + 365 * 24 * 3600 * 1000),
            })
            .setJson(this.name, this.value)
        return this.value
    }

    remove() {
        this.cookieStoreHandler.remove(this.name)
        this.value = null
    }
}
