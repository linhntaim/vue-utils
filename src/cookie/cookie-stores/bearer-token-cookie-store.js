import {CookieStore} from './cookie-store'

export class BearerTokenCookieStore extends CookieStore {
    retrieveTransform(value) {
        if (value) {
            const refreshToken = this.cookieHandler.get(this.refreshTokenNaming(this.name))
            return refreshToken ? {
                accessToken: value,
                tokenType: value.tokenType,
                refreshToken: refreshToken,
            } : {
                accessToken: value,
                tokenType: value.tokenType,
            }
        }
        return null
    }

    storeTransform(value) {
        return value ? {
            accessToken: value.accessToken,
            tokenType: value.tokenType,
            refreshToken: value.refreshToken,
            tokenEndTime: value.tokenEndTime,
        } : null
    }

    refreshTokenNaming(name) {
        return name + ':refresh'
    }

    setRefreshTokenExpires(expires) {
        this.refreshTokenExpires = expires
    }

    store(value) {
        const transformed = this.storeTransform(value)
        if (transformed) {
            this.value = {
                accessToken: transformed.accessToken,
                tokenType: transformed.tokenType,
            }
            this.cookieHandler.set(this.name, this.value, new Date(value.tokenEndTime))
            if (this.refreshTokenExpires) {
                this.value.refreshToken = transformed.refreshToken
                this.cookieHandler.set(this.refreshTokenNaming(this.name), this.value.refreshToken, this.refreshTokenExpires)
            }
        } else {
            this.value = null
        }
        return this.value
    }
}
