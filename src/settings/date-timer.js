import {SettingsHelper} from './settings-helper'

export class DateTimer extends SettingsHelper {
    constructor(settings, compiler = null) {
        super(settings)
        this.compiler = compiler
    }

    withCompiler(compiler) {
        this.compiler = compiler
        return this
    }

    apply(settings) {
        this.longDateFormat = 'def.datetime.long_date_' + settings.longDateFormat
        this.shortDateFormat = 'def.datetime.short_date_' + settings.shortDateFormat
        this.longTimeFormat = 'def.datetime.long_time_' + settings.longTimeFormat
        this.shortTimeFormat = 'def.datetime.short_time_' + settings.shortTimeFormat
        return this
    }

    getBags() {
        return {
            d: 'D',
            dd: 'DD',
            sd: 'ddd',
            ld: 'dddd',

            m: 'M',
            mm: 'MM',
            sm: 'MMM',
            lm: 'MMMM',

            yy: 'YY',
            yyyy: 'YYYY',

            h: 'h',
            hh: 'hh',
            h2: 'H',
            hh2: 'HH',
            ii: 'mm',
            ss: 'ss',

            lt: 'a',
            ut: 'A',
        }
    }

    getFormat(format, bags = null) {
        return this.compiler ? this.compiler(format, bags ? bags : this.getBags()) : null
    }

    getLongDateFormat(bags = null) {
        return this.getFormat(this.longDateFormat, bags)
    }

    getShortDateFormat(bags = null) {
        return this.getFormat(this.shortDateFormat, bags)
    }

    getLongTimeFormat(bags = null) {
        return this.getFormat(this.longTimeFormat, bags)
    }

    getShortTimeFormat(bags = null) {
        return this.getFormat(this.shortTimeFormat, bags)
    }
}
