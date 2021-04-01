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

    decrypt(text, secret = null) {
        try {
            return CryptoJS.AES.decrypt(text, this.getSecret(secret)).toString(CryptoJS.enc.Utf8)
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
            return null
        }
    }

    encryptJson(data, secret = null) {
        return this.encrypt(this.toJson(data), secret)
    }

    decryptJson(text, secret = null) {
        return this.fromJson(this.decrypt(text, secret))
    }

    encodeBase64(text) {
        return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text))
    }

    decodeBase64(encodedText) {
        return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encodedText))
    }

    encodeBase64Json(data) {
        return this.encodeBase64(this.toJson(data))
    }

    decodeBase64Json(encodedText) {
        return this.fromJson(this.decodeBase64(encodedText))
    }

    encryptBase64(text, secret = null) {
        return this.encodeBase64(this.encrypt(text, secret))
    }

    decryptBase64(encodedText, secret = null) {
        return this.decrypt(this.decodeBase64(encodedText), secret)
    }

    encryptBase64Json(data, secret = null) {
        return this.encryptBase64(this.toJson(data), secret)
    }

    decryptBase64Json(encodedText, secret = null) {
        return this.fromJson(this.decryptBase64(encodedText, secret))
    }

    toJson(data) {
        return JSON.stringify(data)
    }

    fromJson(text) {
        try {
            return JSON.parse(text)
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
            return null
        }
    }
}

