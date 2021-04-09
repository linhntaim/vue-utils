import {CookieStore} from './cookie-store'

export class SettingsCookieStore extends CookieStore {
    retrieveTransform(value) {
        return value ? {
            appUrl: value.appUrl,
            locale: value.locale,
            country: value.country,
            timezone: value.timezone,
            currency: value.currency,
            numberFormat: value.numberFormat,
            firstDayOfWeek: value.firstDayOfWeek,
            longDateFormat: value.longDateFormat,
            shortDateFormat: value.shortDateFormat,
            longTimeFormat: value.longTimeFormat,
            shortTimeFormat: value.shortTimeFormat,
        } : null
    }

    storeTransform(value) {
        return value ? {
            appUrl: value.appUrl,
            locale: value.locale,
            country: value.country,
            timezone: value.timezone,
            currency: value.currency,
            numberFormat: value.numberFormat,
            firstDayOfWeek: value.firstDayOfWeek,
            longDateFormat: value.longDateFormat,
            shortDateFormat: value.shortDateFormat,
            longTimeFormat: value.longTimeFormat,
            shortTimeFormat: value.shortTimeFormat,
        } : null
    }
}
