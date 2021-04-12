import {CookieStoreHandler} from './cookie-store-handler'
import Cookies from 'js-cookie'

export class JsCookieStoreHandler extends CookieStoreHandler {
    setCookieRaw(name, data, expires = null, path = '/', domain = null, sameSite = 'lax') {
        Cookies.set(name, data, {
            expires: expires,
            path: path,
            domain: domain,
            secure: this.secure(),
            sameSite: sameSite,
        })
        return this
    }

    getCookieRaw(name) {
        return Cookies.get(name)
    }

    removeCookieRaw(name, path = '/', domain = null) {
        Cookies.remove(name, {
            path: path,
            domain: domain,
        })
    }

    clearCookieRaw() {
        Object.keys(Cookies.get()).forEach(name => {
            Cookies.remove(name)
        })
        return this
    }
}