export class PermissionBarrierAction {
    constructor(matchedPermissions = []) {
        this.matchedPermissions = matchedPermissions
    }

    /**
     *
     * @returns {String[]}
     */
    getMatchedPermissions() {
        return this.matchedPermissions
    }
}