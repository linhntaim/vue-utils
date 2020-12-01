import Cookies from 'js-cookie'
import {CookieHandler} from './cookie-handler'

export class JsCookieHandler extends CookieHandler {
    setRaw(name, data, expires = null, path = '/', domain = null, sameSite = 'lax') {
        Cookies.set(name, data, this.buildOptions(expires, path, domain, sameSite))
    }

    getRaw(name) {
        return Cookies.get(name)
    }

    removeRaw(names, path = '/', domain = null) {
        const options = this.buildOptions(null, path, domain)
        for (const i in names) {
            Cookies.remove(names[i], options)
        }
    }

    buildOptions(expires = null, path = '/', domain = null, sameSite = 'lax') {
        return {
            expires: expires,
            path: path,
            domain: domain,
            secure: this.secure(),
            sameSite: sameSite,
        }
    }
}


