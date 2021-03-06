export class Sorter {
    constructor() {
        this.by = ''
        this.order = 'asc'
    }

    parseQuery(queryParams, defaultBy = '', defaultOrder = 'asc') {
        if (queryParams.sort_by && queryParams.sort_order) {
            this.by = queryParams.sort_by
            this.order = queryParams.sort_order
        } else if (queryParams.sort_by) {
            this.by = queryParams.sort_by
            this.order = defaultOrder
        } else {
            this.by = defaultBy
            this.order = defaultOrder
        }

        return this
    }

    setBy(by) {
        if (this.by === by) {
            this.order = this.order === 'asc' ? 'desc' : 'asc'
        } else {
            this.by = by
            this.order = 'asc'
        }
    }
}
