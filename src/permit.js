export class Permit {
    /**
     *
     * @param {Array} matchedPermissions
     * @param {Array} matchingPermissions
     * @returns {boolean}
     */
    match(matchedPermissions, matchingPermissions) {
        if (!matchedPermissions || !matchedPermissions.length) {
            return true
        }

        if (!matchingPermissions || !matchingPermissions.length) {
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
}
