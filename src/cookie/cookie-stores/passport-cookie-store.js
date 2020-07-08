import {CookieStore} from './cookie-store'

export class PassportCookieStore extends CookieStore {
    transform(value) {
        return value ? {
            accessToken: value.accessToken,
            tokenType: value.tokenType,
            refreshToken: value.refreshToken,
            tokenEndTime: value.tokenEndTime,
        } : null
    }
}
