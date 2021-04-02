import {ExternalJs} from './external-js'
import {Loader} from '../loader'

export class JsLoader extends Loader {
    constructor(settings = {}) {
        super(settings)

        this.externalJs = new ExternalJs()
        this.scriptPointers = []
    }

    addScript(scriptSrc) {
        this.scriptPointers.push(this.externalJs.add(scriptSrc))
    }

    remove() {
        this.scriptPointers.forEach(scriptPointer => this.externalJs.remove(scriptPointer))
        super.remove()
    }
}
