export class StoreHandler {
    /**
     *
     * @param {Crypto} crypto
     * @param {String[]|String|null} encryptExceptNames
     * @param {String} namePrefix
     */
    constructor(crypto, encryptExceptNames = null, namePrefix = '') {
        this.crypto = crypto
        this.encryptExceptNames = encryptExceptNames ?
            (typeof encryptExceptNames === 'string' ? [encryptExceptNames] : encryptExceptNames) : null
        this.store = {}
        this.namePrefix = namePrefix
    }

    naming(name) {
        return this.namePrefix + name
    }

    shouldEncrypt(name) {
        return !this.encryptExceptNames
            || (!this.encryptExceptNames.includes('*') && !this.encryptExceptNames.includes(name))
    }

    setRaw(name, value) {
        this.store[name] = value
    }

    getRaw(name) {
        return name in this.store ? this.store[name] : null
    }

    removeRaw(name) {
        if (name in this.store) {
            delete this.store[name]
        }
    }

    clearRaw() {
        this.store = {}
    }

    /**
     *
     * @param {String} name
     * @param {String} value
     * @param {boolean|null} encrypted
     * @returns {StoreHandler}
     */
    set(name, value, encrypted = null) {
        this.setRaw(this.naming(name), (encrypted === null && this.shouldEncrypt(name)) || encrypted === true ?
            this.crypto.encrypt(value) : value)
        return this
    }

    /**
     *
     * @param {String} name
     * @param {String|null} def
     * @param {boolean|null} encrypted
     * @returns {String|null}
     */
    get(name, def = null, encrypted = null) {
        const value = this.getRaw(this.naming(name))
        return value ?
            ((encrypted === null && this.shouldEncrypt(name)) || encrypted === true ?
                this.crypto.decrypt(value) : value)
            : def
    }

    /**
     *
     * @param {String} name
     * @param {Object} value
     * @param {boolean|null} encrypted
     * @returns {StoreHandler}
     */
    setJson(name, value, encrypted = null) {
        return this.set(name, JSON.stringify(value), encrypted)
    }

    /**
     *
     * @param {String} name
     * @param {String|null} def
     * @param {boolean|null} encrypted
     * @returns {Object|null}
     */
    getJson(name, def = null, encrypted = null) {
        const value = this.get(name, null, encrypted)
        try {
            return value ? JSON.parse(value) : def
        } catch (e) {
            return def
        }
    }

    /**
     *
     * @param {String} name
     * @returns {StoreHandler}
     */
    remove(name) {
        this.removeRaw(this.naming(name))
        return this
    }

    /**
     *
     * @param {String[]} names
     * @returns {StoreHandler}
     */
    removeMany(names) {
        names.forEach(name => this.removeRaw(this.naming(name)))
        return this
    }

    /**
     *
     * @returns {StoreHandler}
     */
    clear() {
        this.clearRaw()
        return this
    }
}
