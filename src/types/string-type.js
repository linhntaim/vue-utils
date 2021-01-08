import {PrimitiveType} from './primitive-type'

export class StringType extends PrimitiveType {
    static is(value) {
        return typeof value === 'string'
    }

    static empty(value) {
        return value === '' || value.trim() === ''
    }

    /**
     *
     * @param {String} haystack
     * @param {String|String[]} needles
     * @returns {boolean}
     */
    static startsWith(haystack, needles) {
        if (StringType.is(needles)) {
            needles = [needles]
        }
        return needles.some(needle => {
            return haystack.indexOf(needle) === 0
        })
    }

    /**
     *
     * @param {String} string
     * @param {Number} times
     * @returns {String}
     */
    static repeat(string, times) {
        return string.repeat(times)
    }

    /**
     *
     * @param {String} string
     * @param {Number|String} length
     * @param {String} char
     * @param {Boolean} left
     * @returns {String}
     */
    static fill(string, length, char, left = true) {
        const repeated = (StringType.is(length) ? length.length : length) - string.length
        return repeated <= 0 ?
            string : (left ? this.repeat(char, repeated) + string : string + this.repeat(char, repeated))
    }

    /**
     *
     * @param {String} string
     * @param {String} chars
     * @returns {String}
     */
    static trim(string, chars = ' \t\n\r\0\x0B') {
        chars = chars.replace(' ', '\\s')
        return string.replace(new RegExp('^[' + chars + ']|[' + chars + ']$', 'g'), '')
    }

    /**
     *
     * @param {String} string
     * @returns {String}
     */
    static ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.substr(1)
    }

    /**
     *
     * @param {String} text
     * @returns {String[]}
     */
    static lines(text) {
        return text.split(/\r*\n/)
            .map(line => {
                line = StringType.trim(line)
                if (line) return line
            })
            .filter(i => {
                return i
            })
    }
}