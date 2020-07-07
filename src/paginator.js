export class Paginator {
    constructor(itemsPerPageList, cache) {
        this.itemsPerPageList = itemsPerPageList
        this.pagination = {
            current: 1,
            items_per_page: this.itemsPerPageList[0],

            start_order: 0,
            first: 1,
            last: 1,
            next: 1,
            prev: 1,
            at_first: true,
            at_last: true,
            range: {
                start: 1,
                end: 1,
            },
            total_items: 0,
            formatted_total_items: '0',
        }
        this.cache = cache
        this.restoreItemsPerPage()
    }

    parsePagination(pagination) {
        if (pagination) {
            this.pagination = pagination
        }
        return this
    }

    parseQuery(queryParams) {
        this.pagination.current = parseInt(queryParams.page) | 0
        if (this.pagination.current < 1) this.pagination.current = 1

        const $itemsPerPage = parseInt(queryParams.items_per_page) | 0
        if (this.itemsPerPageList.indexOf($itemsPerPage) !== -1) {
            this.pagination.items_per_page = $itemsPerPage
            this.storeItemsPerPage()
        }

        return this
    }

    restoreItemsPerPage() {
        this.pagination.items_per_page = parseInt(this.cache.get('items_per_page')) | 0
        if (this.itemsPerPageList.indexOf(this.pagination.items_per_page) === -1) {
            this.pagination.items_per_page = this.itemsPerPageList[0]
            this.storeItemsPerPage()
        }
    }

    storeItemsPerPage() {
        this.cache.set('items_per_page', this.pagination.items_per_page)
    }

    setPage(page) {
        this.pagination.current = page
    }

    setItemsPerPage(itemsPerPage) {
        this.pagination.items_per_page = itemsPerPage
        this.storeItemsPerPage()
    }
}
