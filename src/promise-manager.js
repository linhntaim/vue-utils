export class PromiseManager {
    constructor() {
        this.promises = {}
    }

    add(name, promise) {
        this.promises[name] = promise
        return this
    }

    addMany(promises) {
        Object.assign(this.promises, promises)
        return this
    }

    ready() {
        return new Promise((resolve, reject) => {
            const names = Object.keys(this.promises),
                promising = names.length,
                thenArgs = {}
            let promised = 0, name, promise

            if (promising === promised) {
                resolve(thenArgs)
                return
            }

            while ((name = names.shift()) && (promise = this.promises[name])) {
                promise.then((...args) => {
                    thenArgs[name] = args
                    if (++promised === promising) {
                        resolve(thenArgs)
                    }
                }).catch((...args) => {
                    reject({
                        catch: {
                            name: name,
                            args: args,
                        },
                        then: thenArgs,
                    })
                })
            }
        })
    }
}
