import {CookieStore} from './cookie-store'

export class BearerTokenCookieStore extends CookieStore {
    retrieveTransform(value) {
        const refreshToken = this.cookieStoreHandler.getJson(this.refreshTokenNaming(this.name))
        if (value) {
            return refreshToken ? {
                accessToken: value.accessToken,
                tokenType: value.tokenType,
                expiresIn: value.expiresIn,
                refreshToken: refreshToken,
            } : {
                accessToken: value.accessToken,
                tokenType: value.tokenType,
                expiresIn: value.expiresIn,
            }
        }
        return refreshToken ? {
            refreshToken: refreshToken,
        } : null
    }

    storeTransform(value) {
        return value ? {
            accessToken: value.accessToken,
            tokenType: value.tokenType,
            refreshToken: value.refreshToken,
            expiresIn: value.expiresIn,
        } : null
    }

    refreshTokenNaming(name) {
        return name + '__refresh'
    }

    setRefreshTokenExpires(expires) {
        this.refreshTokenExpires = expires
        return this
    }

    store(value) {
        const transformed = this.storeTransform(value)
        if (transformed) {
            const expires = new Date((new Date).getTime() + transformed.expiresIn * 1000)
            this.value = {
                accessToken: transformed.accessToken,
                tokenType: transformed.tokenType,
                expiresIn: transformed.expiresIn,
            }
            this.cookieStoreHandler
                .setTemporarySettings({
                    expires: expires,
                })
                .setJson(this.name, this.value)
            this.value.refreshToken = transformed.refreshToken
            this.cookieStoreHandler
                .setTemporarySettings({
                    expires: this.refreshTokenExpires ? this.refreshTokenExpires : expires,
                })
                .setJson(
                    this.refreshTokenNaming(this.name),
                    this.value.refreshToken,
                )
        } else {
            this.value = null
        }
        return this.value
    }

    remove() {
        this.refreshTokenExpires = null
        this.cookieStoreHandler.remove(this.refreshTokenNaming(this.name))
        super.remove()
    }
}
