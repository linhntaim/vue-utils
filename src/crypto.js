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
        try {
            return CryptoJS.AES.decrypt(text, this.getSecret(secret)).toString(CryptoJS.enc.Utf8)
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
            return null
        }
    }

    encryptJson(data, secret) {
        return this.encrypt(JSON.stringify(data), this.getSecret(secret))
    }

    decryptJson(text, secret) {
        return JSON.parse(this.decrypt(text, this.getSecret(secret)))
    }

    encryptBase64(text) {
        return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text))
    }

    decryptBase64(encodedText) {
        return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encodedText))
    }
}

