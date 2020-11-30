import {CookieHandler} from './cookie-handler'
import {LocalCacheHandler} from '../../cache'

export class LocalCookieHandler extends CookieHandler {
    constructor(crypto, settings) {
        super(crypto, settings)

        this.localCacheHandler = new LocalCacheHandler()
    }

    setRaw(name, data, expires = null, path = '/', domain = null, sameSite = 'lax') {
        if (expires) {
            if (expires <= new Date()) {
                return
            }
            this.localCacheHandler.set(name + '___expires', expires.toString())
        }
        this.localCacheHandler.set(name + '___path', path)
        this.localCacheHandler.set(name, data)
    }

    getRaw(name) {
        const expires = this.localCacheHandler.get(name + '___expires')
        if (expires && new Date(expires) <= new Date()) {
            this.remove([
                name + '___expires',
                name + '___path',
                name,
            ])
            return null
        }
        const path = this.localCacheHandler.get(name + '___path')
        if (window.location.pathname.indexOf(path) !== 0) {
            return null
        }
        return this.localCacheHandler.get(name)
    }

    remove(names, path = '/', domain = null) {
        for (const i in names) {
            this.localCacheHandler.remove(names[i])
        }
    }
}