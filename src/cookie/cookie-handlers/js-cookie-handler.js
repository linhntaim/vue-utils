import Cookies from 'js-cookie'
import {CookieHandler} from './cookie-handler'

export class JsCookieHandler extends CookieHandler {
    setRaw(name, data, expires = null, path = '/', domain = null, sameSite = 'lax') {
        Cookies.set(name, data, this.buildOptions(expires, domain, path, sameSite))
    }

    getRaw(name) {
        return Cookies.get(name, null)
    }

    remove(names, path = '/', domain = null) {
        const options = this.buildOptions(null, path, domain)
        for (const i in names) {
            Cookies.remove(names[i], options)
        }
    }

    buildOptions(expires = null, path = '/', domain = null, sameSite = 'lax') {
        return {
            expires: expires ? expires : this.settings.expires,
            path: path ? path : this.settings.path,
            domain: domain ? domain : this.settings.domain,
            secure: window.location.protocol === 'https',
            sameSite: sameSite,
        }
    }
}


