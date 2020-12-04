import {scriptPointer} from './script-pointer'

export class ExternalJs {
    constructor() {
        this.session = {}
        this.sessionPointer = 0
    }

    add(...scriptSources) {
        ++this.sessionPointer
        this.session[this.sessionPointer] = []

        scriptSources.forEach(scriptSrc => {
            if (typeof scriptSrc === 'string') {
                this.addScript(scriptSrc)
            } else if (typeof scriptSrc === 'object') {
                Object.keys(scriptSrc).forEach(parentScriptSrc => {
                    this.addScript(parentScriptSrc).onload = () => {
                        scriptSrc[parentScriptSrc].forEach(childScriptSrc => {
                            this.addScript(childScriptSrc)
                        })
                    }
                })
            }
        })

        return this.sessionPointer
    }

    addScript(scriptSrc) {
        this.session[this.sessionPointer].push(++scriptPointer.current)

        const scriptElement = document.createElement('script')
        scriptElement.setAttribute('id', 'script' + scriptPointer.current)
        scriptElement.setAttribute('src', scriptSrc)
        document.body.appendChild(scriptElement)
        return scriptElement
    }

    remove(sessionPointer) {
        if (!(sessionPointer in this.session)) return
        this.session[sessionPointer].forEach(ownScriptPointer => {
            document.getElementById('script' + ownScriptPointer).remove()
        })
        delete this.session[sessionPointer]
    }
}
