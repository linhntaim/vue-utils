import ipAddress from 'ipaddr.js'

export class IP {
    match(matchingIp, matchedIp) {
        if (Array.isArray(matchedIp)) {
            for (const i in matchedIp) {
                if (this.match(matchingIp, matchedIp[i])) return true
            }
            return false
        }
        if (Array.isArray(matchingIp)) {
            for (const i in matchingIp) {
                if (this.match(matchingIp[i], matchedIp)) return true
            }
            return false
        }

        try {
            matchingIp = ipAddress.process(matchingIp)

            if (matchedIp.indexOf('/') === -1) {
                matchedIp = ipAddress.process(matchedIp)
                if (matchingIp.kind() === 'ipv6' && matchedIp.kind() === 'ipv6') {
                    return matchingIp.toNormalizedString() === matchedIp.toNormalizedString()
                }
                return matchingIp.toString() === matchedIp.toString()
            }

            matchedIp = ipAddress.parseCIDR(matchedIp)
            return matchingIp.match(matchedIp)
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)

            return false
        }
    }
}
