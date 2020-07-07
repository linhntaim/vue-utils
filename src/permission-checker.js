export class PermissionChecker {
    checkAtLeast(requirePermissions, permissions) {
        if (!requirePermissions || !requirePermissions.length) {
            return true
        }

        if (!permissions || !permissions.length) {
            return false
        }

        if (typeof requirePermissions === 'string') {
            requirePermissions = requirePermissions.split('|')
            for (const i in requirePermissions) {
                if (permissions.indexOf(requirePermissions[i]) !== -1) {
                    return true
                }
            }
        } else if (typeof requirePermissions === 'object') {
            for (const i in requirePermissions) {
                if (this.checkAtLeast(requirePermissions[i])) {
                    return true
                }
            }
        }

        return false
    }

    checkByNames(names, permissions) {
        const namedPermissions = {}
        names.forEach((permissionName) => {
            namedPermissions[permissionName] = permissions.indexOf(permissionName) !== -1
        })
        return namedPermissions
    }
}
