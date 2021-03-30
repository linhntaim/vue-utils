import {StoreHandler} from './store-handler'

export class CookieStoreHandler extends StoreHandler {
    constructor(settings, crypto, encryptExceptNames = null, namePrefix = '') {
        super(crypto, encryptExceptNames, namePrefix)

        this.settings = settings
        this.temporarySettings = {}
    }

    /**
     *
     * @param temporarySettings
     * @returns {CookieStoreHandler}
     */
    setTemporarySettings(temporarySettings = {}) {
        this.temporarySettings = temporarySettings
        return this
    }

    retrieveTemporarySettings() {
        const temporarySettings = this.temporarySettings
        this.setTemporarySettings()
        return temporarySettings
    }

    setRaw(name, value) {
        const settings = this.retrieveTemporarySettings()
        this.setCookieRaw(
            name,
            value,
            this.expires(settings.expires),
            this.path(settings.path),
            this.domain(settings.domain),
            this.sameSite(settings.sameSite),
        )
    }

    setCookieRaw(name, value, expires = null, path = '/', domain = null, sameSite = 'lax') {

    }

    getRaw(name) {
        return this.getCookieRaw(name)
    }

    getCookieRaw(name) {

    }

    removeRaw(name) {
        const settings = this.retrieveTemporarySettings()
        this.removeCookieRaw(
            name,
            this.path(settings.path),
            this.domain(settings.domain),
        )
    }

    removeCookieRaw(name, path = '/', domain = null) {

    }

    removeMany(names) {
        const settings = this.retrieveTemporarySettings()
        names.forEach(name => {
            this.setTemporarySettings(settings)
            this.removeRaw(this.naming(name))
        })
        return this
    }

    clearRaw() {
        this.clearCookieRaw()
    }

    clearCookieRaw() {

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