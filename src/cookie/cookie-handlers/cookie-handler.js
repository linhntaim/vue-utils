export default class CookieHandler {
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

    set(name, data, expires = null, path = '/', domain = null, sameSite = 'lax') {
        this.setRaw(name, this.encrypt(data), expires = null, path = '/', domain = null, sameSite = 'lax')
    }

    setRaw(name, data, expires = null, path = '/', domain = null, sameSite = 'lax') {

    }

    get(name) {
        return this.decrypt(this.getRaw(name))
    }

    getRaw(name) {
        return null
    }

    remove(names, path = '/', domain = null) {
    }
}


