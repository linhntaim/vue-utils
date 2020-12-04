import CryptoJS from 'crypto-js'

export class Crypto {
    constructor(secret = null) {
        this.secret = secret
    }

    getSecret(secret = null) {
        return secret ? secret : this.secret
    }

    encrypt(text, secret = null) {
        return CryptoJS.AES.encrypt(text, this.getSecret(secret)).toString()
    }

    decrypt(text, secret) {
        return CryptoJS.AES.decrypt(text, this.getSecret(secret)).toString(CryptoJS.enc.Utf8)
    }

    encryptJson(data, secret) {
        return this.encrypt(JSON.stringify(data), this.getSecret(secret))
    }

    decryptJson(text, secret) {
        return JSON.parse(this.decrypt(text, this.getSecret(secret)))
    }
}

