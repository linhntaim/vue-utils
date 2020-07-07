export default class Collection {
    constructor(data) {
        this.data = data
    }

    pluck(key) {
        const plucked = []
        for (let i in this.data) {
            plucked.push(this.data[i][key])
        }
        return plucked
    }

    keyBy(name) {
        const keyBy = {}
        for (let i in this.data) {
            keyBy[this.data[i][name]] = this.data[i]
        }
        return keyBy
    }
}
