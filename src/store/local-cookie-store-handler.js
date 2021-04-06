import {CookieStoreHandler} from './cookie-store-handler'
import {LocalStoreHandler} from './local-store-handler'

export class LocalCookieStoreHandler extends CookieStoreHandler {
    constructor(settings, crypto = null, encryptExceptNames = null, namePrefix = '___cookie_', store = null) {
        super(settings, crypto, encryptExceptNames)

        this.store = new LocalStoreHandler(null, null, namePrefix, store)
    }

    suffixNaming(name, suffix = null) {
        return name + (suffix ? '___' + suffix : '')
    }

    setCookieRaw(name, value, expires = null, path = '/', domain = null, sameSite = 'lax') {
        if (expires) {
            if (expires <= new Date()) {
                return this
            }
            this.store.set(this.suffixNaming(name, 'expires'), expires.toString())
        }
        this.store.set(this.suffixNaming(name, 'domain'), domain)
        this.store.set(this.suffixNaming(name, 'path'), path)
        this.store.set(this.suffixNaming(name), value)
        return this
    }

    getCookieRaw(name) {
        const expires = this.store.get(this.suffixNaming(name, 'expires'))
        if (expires && new Date(expires) <= new Date()) {
            this.removeRaw(name)
            return null
        }
        const domain = this.store.get(this.suffixNaming(name, 'domain'))
        const hostname = window.location.hostname
        if (domain
            && ((domain.charAt(0) === '.' && hostname.substring(hostname.length - domain.length) !== domain)
                || (domain.charAt(0) !== '.' && hostname !== domain))) {
            return null
        }
        const path = this.store.get(this.suffixNaming(name, 'path'))
        const pathname = window.location.pathname
        if (pathname.indexOf(path) !== 0) {
            return null
        }
        return this.store.get(this.suffixNaming(name))
    }

    removeCookieRaw(name, path = '/', domain = null) {
        const d = this.store.get(this.suffixNaming(name, 'domain'))
        const p = this.store.get(this.suffixNaming(name, 'path'))
        const hostname = window.location.hostname
        if ((!d
            || ((d.charAt(0) === '.' && hostname.substring(hostname.length - d.length) === d)
                || (d.charAt(0) !== '.' && hostname === d)))
            && path === p) {
            this.store.remove(this.suffixNaming(name, 'expires'))
            this.store.remove(this.suffixNaming(name, 'domain'))
            this.store.remove(this.suffixNaming(name, 'path'))
            this.store.remove(this.suffixNaming(name))
        }
        return this
    }

    clearCookieRaw() {
        this.store.clear()
        return this
    }
}