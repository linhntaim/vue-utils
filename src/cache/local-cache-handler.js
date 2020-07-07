import {CacheHandler} from './cache-handler'

export class LocalCacheHandler extends CacheHandler {
    constructor() {
        super()

        this.cache = window.localStorage
    }

    set(name, value) {
        this.cache.setItem(name, value)
    }

    get(name, def = null) {
        const value = this.cache.getItem(name)
        return value ? value : def
    }

    remove(name) {
        this.cache.removeItem(name)
    }
}
