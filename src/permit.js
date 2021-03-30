export class Permit {
    /**
     *
     * @param {Array} matchedPermissions
     * @param {Array} matchingPermissions
     * @returns {boolean}
     */
    match(matchedPermissions, matchingPermissions) {
        matchedPermissions = this.getPermissions(matchedPermissions)
        if (!matchedPermissions.length) {
            return true
        }

        matchingPermissions = this.getPermissions(matchingPermissions)
        if (!matchingPermissions.length) {
            return false
        }

        return matchedPermissions.some(matchedPermission => matchingPermissions.includes(matchedPermission))
    }

    /**
     *
     * @param {Array} matchedPermissionNames
     * @param {Array} matchingPermissions
     * @returns {{}}
     */
    matchWithNames(matchedPermissionNames, matchingPermissions) {
        const matchedPermissions = {}
        matchedPermissionNames.forEach(permissionName => {
            matchedPermissions[permissionName] = matchingPermissions.includes(permissionName)
        })
        return matchedPermissions
    }

    /**
     *
     * @param {String[]|String} permissions
     * @returns {String[]}
     */
    getPermissions(permissions) {
        return permissions ?
            (typeof permissions === 'string' ? permissions.split('|') : permissions)
            : []
    }
}
