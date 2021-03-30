import {PermissionBarrierAction} from './permission-barrier-action'

export class PermissionBarrier {
    constructor(permit, storeHandler) {
        this.permit = permit
        this.storeHandler = storeHandler
        this.routes = {}
        this.actions = []
        this.matchingPermissions = []
        this.temporaryMatchingPermissions = []
        this.temporaryMatchedPermissions = []
        this.restoreTemporaryMatchingPermissions()
        this.restoreTemporaryMatchedPermissions()
    }

    importFromRoutePermissions(routePermissions = {}) {
        Object.keys(routePermissions).forEach(routeName => {
            const permissions = routePermissions[routeName]
            this.routes[routeName] = new PermissionBarrierAction(this.permit.getPermissions(permissions))
        })
        return this
    }

    setMatchingPermissions(matchingPermissions = []) {
        this.matchingPermissions = matchingPermissions
    }

    addTemporaryMatchingPermission(temporaryPermission) {
        if (!this.temporaryMatchingPermissions.includes(temporaryPermission)) {
            this.temporaryMatchingPermissions.push(temporaryPermission)
            this.storeTemporaryMatchingPermissions()
        }
        return this
    }

    removeTemporaryMatchingPermission(temporaryMatchingPermission) {
        const i = this.temporaryMatchingPermissions.indexOf(temporaryMatchingPermission)
        if (i !== -1) {
            this.temporaryMatchingPermissions.splice(i, 1)
            this.storeTemporaryMatchingPermissions()
        }
        return this
    }

    storeTemporaryMatchingPermissions() {
        this.storeHandler.setJson('__permission_barrier_temporary_matching_permission', this.temporaryMatchingPermissions)
        return this
    }

    restoreTemporaryMatchingPermissions() {
        (temporaryMatchingPermissions => {
            temporaryMatchingPermissions && (this.temporaryMatchingPermissions = temporaryMatchingPermissions)
        })(this.storeHandler.getJson('__permission_barrier_temporary_matching_permission'))
        return this
    }

    addTemporaryMatchedPermission(temporaryMatchedPermissions) {
        if (!this.temporaryMatchedPermissions.includes(temporaryMatchedPermissions)) {
            this.temporaryMatchedPermissions.push(temporaryMatchedPermissions)
            this.storeTemporaryMatchedPermissions()
        }
        return this
    }

    removeTemporaryMatchedPermission(temporaryMatchedPermission) {
        const i = this.temporaryMatchedPermissions.indexOf(temporaryMatchedPermission)
        if (i !== -1) {
            this.temporaryMatchedPermissions.splice(i, 1)
            this.storeTemporaryMatchedPermissions()
        }
        return this
    }

    storeTemporaryMatchedPermissions() {
        this.storeHandler.setJson('__permission_barrier_temporary_matched_permission', this.temporaryMatchedPermissions)
        return this
    }

    restoreTemporaryMatchedPermissions() {
        (temporaryMatchedPermissions => {
            temporaryMatchedPermissions && (this.temporaryMatchedPermissions = temporaryMatchedPermissions)
        })(this.storeHandler.getJson('__permission_barrier_temporary_matched_permission'))
        return this
    }

    /**
     *
     * @param {Object} route
     * @param {Function|null} notPassCallback
     * @returns {boolean}
     */
    passRoutes(route, notPassCallback = null) {
        if (route.name in this.routes) {
            return this.passAction(this.routes[route.name], notPassCallback)
        }
        return true
    }

    /**
     *
     * @param {Function|null} notPassCallback
     * @returns {boolean}
     */
    passActions(notPassCallback = null) {
        if (this.actions.length) {
            return this.actions.every(action => this.passAction(action, notPassCallback))
        }
        return true
    }

    /**
     *
     * @param {PermissionBarrierAction} action
     * @param {Function|null} notPassCallback
     */
    passAction(action, notPassCallback = null) {
        if (this.permit.match([
            ...action.getMatchedPermissions(),
            ...this.temporaryMatchedPermissions,
        ], [
            ...this.matchingPermissions,
            ...this.temporaryMatchingPermissions,
        ])) {
            return true
        }
        notPassCallback && notPassCallback(action)
        return false
    }
}