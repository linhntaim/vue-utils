export default class Log {
    constructor(debug = true, onlyNamespaces = []) {
        this.debug = debug
        this.onlyNamespaces = onlyNamespaces
    }

    send(something, namespace = null) {
        if (this.debug) {
            if (this.onlyNamespaces.length && (!namespace || this.onlyNamespaces.indexOf(namespace) === -1)) return
            if (typeof something === 'object') {
                if (namespace) {
                    console.log(namespace + ': ', something)
                } else {
                    console.log(something)
                }
            } else {
                console.log(namespace ? namespace + ': ' + something : something)
            }
        }
    }
}
