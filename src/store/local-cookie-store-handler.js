import {CookieStoreHandler} from './cookie-store-handler'
import {LocalStoreHandler} from './local-store-handler'

export class LocalCookieStoreHandler extends CookieStoreHandler {
    constructor(settings, crypto, encryptExceptNames = null) {
        super(settings, crypto, encryptExceptNames)

        this.store = new LocalStoreHandler(this.crypto, '*')
        this.namePrefix = '___cookie_'
    }

    naming(name, suffix = null) {
        return super.naming(name) + (suffix ? '___' + suffix : '')
    }

    setCookieRaw(name, value, expires = null, path = '/', domain = null, sameSite = 'lax') {
        if (expires) {
            if (expires <= new Date()) {
                return
            }
            this.store.setRaw(this.naming(name, 'expires'), expires.toString())
        }
        this.store.setRaw(this.naming(name, 'domain'), domain)
        this.store.setRaw(this.naming(name, 'path'), path)
        this.store.setRaw(this.naming(name), value)
    }

    getCookieRaw(name) {
        const expires = this.store.getRaw(this.naming(name, 'expires'))
        if (expires && new Date(expires) <= new Date()) {
            this.remove(name)
            return null
        }
        const domain = this.store.getRaw(this.naming(name, 'domain'))
        const hostname = window.location.hostname
        if (domain
            && ((domain.charAt(0) === '.' && hostname.substring(hostname.length - domain.length) !== domain)
                || (domain.charAt(0) !== '.' && hostname !== domain))) {
            return null
        }
        const path = this.store.getRaw(this.naming(name, 'path'))
        const pathname = window.location.pathname
        if (pathname.indexOf(path) !== 0) {
            return null
        }
        return this.store.getRaw(this.naming(name))
    }

    removeCookieRaw(name, path = '/', domain = null) {
        const d = this.store.getRaw(this.naming(name, 'domain'))
        const p = this.store.getRaw(this.naming(name, 'path'))
        const hostname = window.location.hostname
        if ((!d
            || ((d.charAt(0) === '.' && hostname.substring(hostname.length - d.length) === d)
                || (d.charAt(0) !== '.' && hostname === d)))
            && path === p) {
            this.store.removeRaw(this.naming(name, 'expires'))
            this.store.removeRaw(this.naming(name, 'domain'))
            this.store.removeRaw(this.naming(name, 'path'))
            this.store.removeRaw(this.naming(name))
        }
    }

    clearCookieRaw() {
        for (let i = 0; i < window.localStorage.length; ++i) {
            const name = window.localStorage.key(i)
            if (name.substring(0, this.namePrefix.length) === this.namePrefix) {
                this.store.removeRaw(name)
            }
        }
    }
}