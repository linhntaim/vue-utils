import {JsLoader} from './js-loader'

export class GoogleApi extends JsLoader {
    load(resolve) {
        this.addScript('https://apis.google.com/js/api:client.js')

        const ready = () => {
            if (window.gapi) {
                this.loaded = true
                resolve()
                return
            }

            setTimeout(ready, 200)
        }
        ready()
    }
}
