export class Searcher {
    constructor() {
        this.defaultParams = {}
        this.params = {}
        this.stateParams = {}
        this.searching = false
    }

    /**
     *
     * @param params
     * @param setDefault
     * @returns {Searcher}
     */
    setParams(params, setDefault = true) {
        for (const key in params) {
            this.params[key] = params[key]
            if (setDefault) {
                this.defaultParams[key] = params[key]
            }
        }
        return this
    }

    parseQuery(queryParams) {
        for (const key in this.params) {
            if (key in queryParams) {
                this.params[key] = queryParams[key]
                this.stateParams[key] = queryParams[key]
            }
        }

        this.searching = this.isSearching()
        return this
    }

    clear() {
        for (const key in this.params) {
            this.params[key] = this.defaultParams[key]
        }
        return this
    }

    saveState() {
        for (const key in this.params) {
            this.stateParams[key] = this.params[key]
        }

        this.searching = this.isSearching()
        return this
    }

    isSearching() {
        return this.isSearchingDeep(this.stateParams)
    }

    isSearchingDeep(params) {
        for (const key in params) {
            if (typeof params[key] === 'object') {
                if (params[key].length !== undefined) { // is array
                    if (params[key].length !== 0) {
                        const arr = params[key]
                        for (const i in arr) {
                            if (arr[i]) {
                                return true
                            }
                        }
                    }
                } else {
                    if (this.isSearchingDeep(params[key])) {
                        return true
                    }
                }
            } else if (params[key]) {
                return true
            }
        }
        return false
    }
}
