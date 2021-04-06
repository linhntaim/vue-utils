export class StoreHandler {
    /**
     *
     * @param {Crypto|null} crypto
     * @param {String[]|String|null} encryptExceptNames
     * @param {String} namePrefix
     * @param {Object|null} store
     */
    constructor(crypto = null, encryptExceptNames = null, namePrefix = '', store = null) {
        this.crypto = crypto
        this.encryptExceptNames = encryptExceptNames ?
            (typeof encryptExceptNames === 'string' ? encryptExceptNames.split(',') : encryptExceptNames) : null
        this.store = store ? store : {}
        this.namePrefix = namePrefix
    }

    shouldEncrypt(name) {
        return !this.encryptExceptNames
            || (!this.encryptExceptNames.includes('*') && !this.encryptExceptNames.includes(name))
    }

    naming(name) {
        return this.namePrefix + name
    }

    beforeNaming(rawName) {
        return rawName.substr(this.namePrefix.length)
    }

    isNamed(rawName) {
        return rawName.substr(0, this.namePrefix.length) === this.namePrefix
    }

    forEach(callback) {
        Object.keys(this.store).forEach(rawName => {
            callback(rawName, this.beforeNaming(), this)
        })
        return this
    }

    setRaw(name, value) {
        this.store[name] = value
        return this
    }

    getRaw(name) {
        return name in this.store ? this.store[name] : null
    }

    removeRaw(name) {
        if (name in this.store) {
            delete this.store[name]
        }
        return this
    }

    clearRaw() {
        this.store = {}
        return this
    }

    /**
     *
     * @param {String} name
     * @param {String} value
     * @param {boolean|null} encrypted
     * @returns {StoreHandler}
     */
    set(name, value, encrypted = null) {
        return this.setRaw(
            this.naming(name),
            this.crypto && ((encrypted === null && this.shouldEncrypt(name)) || encrypted === true) ?
                this.crypto.encrypt(value) : value,
        )
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
            (
                this.crypto && ((encrypted === null && this.shouldEncrypt(name)) || encrypted === true) ?
                    this.crypto.decrypt(value) : value
            )
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
        return this.removeRaw(this.naming(name))
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
        return this.clearRaw()
    }
}
