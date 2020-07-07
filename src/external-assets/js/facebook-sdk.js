import {JsLoader} from './js-loader'

export class FacebookSdk extends JsLoader {
    constructor(settings = {}) {
        super(settings)

        this.callback = null
    }

    safeLoad() {
        if (!this.loaded
            || this.currentLocaleCode !== this.settings.localeCode
            || this.currentCountryCode !== this.settings.countryCode) {
            if (this.loaded) this.remove()

            this.loaded = false
            this.currentLocaleCode = this.settings.localeCode
            this.currentCountryCode = this.settings.countryCode

            return new Promise(resolve => this.load(resolve))
        }
        return new Promise(resolve => resolve())
    }

    load(resolve) {
        if (!window.fbAsyncInit) {
            window.fbAsyncInit = () => {
                window.FB.init({
                    appId: this.settings.client_id,
                    status: true,
                    xfbml: false,
                    version: this.settings.api_version,
                })

                this.loaded = true
                this.callback && this.callback()
            }
        }
        this.callback = resolve
        this.addScript('https://connect.facebook.net/' + this.currentLocaleCode + '_' + this.currentCountryCode + '/sdk.js')
    }

    remove() {
        delete window.FB
        document.getElementById('fb-root').remove()
        this.callback = null
        super.remove()
    }
}
