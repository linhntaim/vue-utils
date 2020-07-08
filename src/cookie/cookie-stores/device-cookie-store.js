import {CookieStore} from './cookie-store'

export class DeviceCookieStore extends CookieStore {
    transform(value) {
        return value ? {
            provider: value.provider,
            secret: value.secret,
        } : null
    }
}
