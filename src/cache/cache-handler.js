export default class CacheHandler {
    constructor() {
        this.cache = {}
    }

    set(name, value) {
        this.cache[name] = value
    }

    get(name, def = null) {
        return name in this.cache ? this.cache[name] : def
    }

    setJson(name, value) {
        this.set(name, JSON.stringify(value))
    }

    getJson(name, def = null) {
        const value = this.get(name)
        try {
            return value ? JSON.parse(value) : def
        } catch (e) {
            return def
        }
    }

    remove(name) {
        if (name in this.cache) {
            delete this.cache[name]
        }
    }
}
