import {CookieStore} from './cookie-store'

export class BearerTokenCookieStore extends CookieStore {
    transform(value) {
        return value ? {
            accessToken: value.accessToken,
            tokenType: value.tokenType,
            refreshToken: value.refreshToken,
            tokenEndTime: value.tokenEndTime,
        } : null
    }

    store(value) {
        this.value = this.transform(value)
        this.cookieHandler.set(this.name, this.value, new Date(value.tokenEndTime))
        return this.value
    }
}
