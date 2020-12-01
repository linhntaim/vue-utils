export class CookieHandler {
    constructor(crypto, settings) {
        this.crypto = crypto
        this.settings = settings
    }

    encrypt(data) {
        return this.crypto.encryptJson(data, this.settings.secret)
    }

    decrypt(encryptedData) {
        return encryptedData ?
            this.crypto.decryptJson(encryptedData, this.settings.secret) : null
    }

    /**
     *
     * @param {String} name
     * @param {Object|String} data
     * @param {Date|Function|null} expires
     * @param {String} path
     * @param {String|null} domain
     * @param {String} sameSite
     */
    set(name, data, expires = null, path = '/', domain = null, sameSite = 'lax') {
        this.setRaw(
            name,
            this.encrypt(data),
            this.expires(expires),
            this.path(path),
            this.domain(domain),
            this.sameSite(sameSite),
        )
    }

    /**
     *
     * @param {String} name
     * @param {String} data
     * @param {Date|null} expires
     * @param {String} path
     * @param {String|null} domain
     * @param {String} sameSite
     */
    setRaw(name, data, expires = null, path = '/', domain = null, sameSite = 'lax') {

    }

    get(name) {
        return this.decrypt(this.getRaw(name))
    }

    getRaw(name) {
        return null
    }

    remove(names, path = '/', domain = null) {
        this.removeRaw(names, this.path(path), this.domain(domain))
    }

    removeRaw(names, path = '/', domain = null) {

    }

    /**
     *
     * @param {Date|Function|null} expires
     * @returns {Date|null}
     */
    expires(expires = null) {
        if (!expires) expires = this.settings.expires
        return typeof expires === 'function' ? expires() : (expires ? expires : null)
    }

    path(path = '/') {
        return path ? path : this.settings.path
    }

    domain(domain = null) {
        return domain ? domain : this.settings.domain
    }

    sameSite(sameSite = 'lax') {
        return sameSite ? sameSite : this.settings.sameSite
    }

    secure() {
        return window.location.protocol === 'https'
    }
}


