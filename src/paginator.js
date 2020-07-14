export class Paginator {
    constructor(itemsPerPageList, cacheHandler, maxPageShowed = 5) {
        this.itemsPerPageList = itemsPerPageList
        this.maxPageShowed = maxPageShowed
        this.pagination = {
            itemsPerPage: this.itemsPerPageList[0],
            current: 1,
            first: 1,
            last: 1,
            atFirst: true,
            atLast: true,
            prev: 1,
            next: 1,
            pages: {
                from: 1,
                to: 1,
            },
            items: {
                from: 0,
                to: 0,
            },
            totalItems: 0,
        }
        this.cacheHandler = cacheHandler
        this.restoreItemsPerPage()
    }

    parsePagination(pagination) {
        if (pagination) {
            const current = parseInt(pagination.current_page)
            const last = parseInt(pagination.last_page)
            const first = 1
            const atLast = current === last
            const atFirst = current === first
            const pivot = Math.round(this.maxPageShowed / 2)
            const distance = Math.floor(this.maxPageShowed / 2)
            const pageTo = current < pivot ? (last > this.maxPageShowed ? this.maxPageShowed : last) : (current < last - distance ? current + distance : last)
            const pageFrom = pageTo - this.maxPageShowed + first
            this.pagination = {
                itemsPerPage: parseInt(pagination.per_page),
                current: current,
                first: first,
                last: last,
                atFirst: atFirst,
                atLast: atLast,
                prev: atFirst ? 1 : current - 1,
                next: atLast ? last : current + 1,
                pages: {
                    from: pageFrom < first ? first : pageFrom,
                    to: pageTo,
                },
                items: {
                    from: parseInt(pagination.from),
                    to: parseInt(pagination.to),
                },
                totalItems: parseInt(pagination.total),
            }
        }
        return this
    }

    parseQuery(queryParams) {
        this.pagination.current = parseInt(queryParams.page) | 0
        if (this.pagination.current < 1) this.pagination.current = 1

        const itemsPerPage = parseInt(queryParams.items_per_page) | 0
        if (this.itemsPerPageList.indexOf(itemsPerPage) !== -1) {
            this.pagination.itemsPerPage = itemsPerPage
            this.storeItemsPerPage()
        }

        return this
    }

    restoreItemsPerPage() {
        this.pagination.itemsPerPage = parseInt(this.cacheHandler.get('items_per_page')) | 0
        if (this.itemsPerPageList.indexOf(this.pagination.itemsPerPage) === -1) {
            this.pagination.itemsPerPage = this.itemsPerPageList[0]
            this.storeItemsPerPage()
        }
    }

    storeItemsPerPage() {
        this.cacheHandler.set('items_per_page', this.pagination.itemsPerPage)
    }

    setPage(page) {
        this.pagination.current = page
    }

    setItemsPerPage(itemsPerPage) {
        this.pagination.itemsPerPage = itemsPerPage
        this.storeItemsPerPage()
    }
}
