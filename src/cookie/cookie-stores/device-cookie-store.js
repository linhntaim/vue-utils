import CookieStore from './cookie-store'

export default class DeviceCookieStore extends CookieStore {
    retrieve() {
        if (this.disabled) return null

        const device = super.retrieve()
        return device ? {
            provider: device.provider ? device.provider : this.def.provider,
            secret: device.secret ? device.secret : null,
        } : this.def
    }

    store(device) {
        if (this.disabled) return null

        return super.store({
            provider: device.provider,
            secret: device.secret,
        })
    }
}
