import {CookieStore} from './cookie-store'

export class PassportCookieStore extends CookieStore {
    transform(value) {
        return value ? {
            access_token: value.access_token,
            token_type: value.token_type,
            refresh_token: value.refresh_token,
            token_end_time: value.token_end_time,
        } : null
    }
}
