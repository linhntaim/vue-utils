import {StoreHandler} from './store-handler'

export class LocalStoreHandler extends StoreHandler {
    constructor(crypto, encryptExceptNames = null, namePrefix = '') {
        super(crypto, encryptExceptNames, namePrefix)

        this.store = window.localStorage
    }

    setRaw(name, value) {
        this.store.setItem(name, value)
    }

    getRaw(name) {
        return this.store.getItem(name)
    }

    removeRaw(name) {
        this.store.removeItem(name)
    }

    clearRaw() {
        this.store.clear()
    }
}
