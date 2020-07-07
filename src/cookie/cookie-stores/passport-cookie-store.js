import CookieStore from './cookie-store'

export default class PassportCookieStore extends CookieStore {
    convert(rawPassport) {
        return {
            accessToken: rawPassport.access_token,
            tokenType: rawPassport.token_type,
            refreshToken: rawPassport.refresh_token,
            tokenEndTime: (new Date).getTime() + rawPassport.expires_in * 1000,
        }
    }

    retrieve() {
        if (this.disabled) return null

        const passport = super.retrieve()
        return passport ? {
            accessToken: passport.access_token,
            tokenType: passport.token_type,
            refreshToken: passport.refresh_token,
            tokenEndTime: parseInt(passport.token_end_time),
        } : this.def
    }

    store(passport) {
        if (this.disabled) return null

        return super.store({
            access_token: passport.accessToken,
            token_type: passport.tokenType,
            refresh_token: passport.refreshToken,
            token_end_time: passport.tokenEndTime,
        }, new Date(passport.tokenEndTime))
    }
}
