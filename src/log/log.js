export class Log {
    constructor(debug = true, onlyNamespaces = []) {
        this.debug = debug
        this.onlyNamespaces = onlyNamespaces
    }

    send(something, namespace = null) {
        if (this.debug) {
            if (this.onlyNamespaces.length && (!namespace || this.onlyNamespaces.indexOf(namespace) === -1)) return
            if (typeof something === 'object') {
                if (namespace) {
                    // eslint-disable-next-line no-console
                    console.log(namespace + ': ', something)
                } else {
                    // eslint-disable-next-line no-console
                    console.log(something)
                }
            } else {
                // eslint-disable-next-line no-console
                console.log(namespace ? namespace + ': ' + something : something)
            }
        }
    }
}
