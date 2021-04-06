import {StoreHandler} from './store-handler'

export class LocalStoreHandler extends StoreHandler {
    constructor(crypto = null, encryptExceptNames = null, namePrefix = '', store = null) {
        super(crypto, encryptExceptNames, namePrefix, store ? store : window.localStorage)
    }

    forEach(callback) {
        for (let i = 0; i < this.store.length; ++i) {
            const rawName = this.store.key(i)
            if (this.isNamed(rawName)) {
                callback(rawName, this.beforeNaming(rawName), this)
            }
        }
        return this
    }

    setRaw(name, value) {
        this.store.setItem(name, value)
        return this
    }

    getRaw(name) {
        return this.store.getItem(name)
    }

    removeRaw(name) {
        this.store.removeItem(name)
        return this
    }

    clearRaw() {
        return this.forEach(rawName => {
            this.removeRaw(rawName)
        })
    }
}
