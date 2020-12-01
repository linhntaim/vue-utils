import {CookieHandler} from './cookie-handler'
import {LocalCacheHandler} from '../../cache'

export class LocalCookieHandler extends CookieHandler {
    constructor(crypto, settings) {
        super(crypto, settings)

        this.localCacheHandler = new LocalCacheHandler()
    }

    naming(name, suffix = null) {
        return '___cookie_' + name + (suffix ? '___' + suffix : '')
    }

    setRaw(name, data, expires = null, path = '/', domain = null, sameSite = 'lax') {
        if (expires) {
            if (expires <= new Date()) {
                return
            }
            this.localCacheHandler.set(this.naming(name, 'expires'), expires.toString())
        }
        this.localCacheHandler.set(this.naming(name, 'path'), path)
        this.localCacheHandler.set(this.naming(name), data)
    }

    getRaw(name) {
        const expires = this.localCacheHandler.get(this.naming(name, 'expires'))
        if (expires && new Date(expires) <= new Date()) {
            this.remove([name])
            return null
        }
        const path = this.localCacheHandler.get(this.naming(name, 'path'))
        if (window.location.pathname.indexOf(path) !== 0) {
            return null
        }
        return this.localCacheHandler.get(this.naming(name))
    }

    remove(names, path = '/', domain = null) {
        for (const i in names) {
            const name = names[i]
            if (path == this.localCacheHandler.get(this.naming(name, 'path'))) {
                this.localCacheHandler.remove(this.naming(name, 'expires'))
                this.localCacheHandler.remove(this.naming(name, 'path'))
                this.localCacheHandler.remove(name)
            }
        }
    }
}