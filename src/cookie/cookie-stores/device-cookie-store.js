import {CookieStore} from './cookie-store'

export class DeviceCookieStore extends CookieStore {
    retrieveTransform(value) {
        return value ? {
            provider: value.provider,
            secret: value.secret,
        } : null
    }

    storeTransform(value) {
        return value ? {
            provider: value.provider,
            secret: value.secret,
        } : null
    }
}
