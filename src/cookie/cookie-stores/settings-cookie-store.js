import {CookieStore} from './cookie-store'

export class SettingsCookieStore extends CookieStore {
    transform(value) {
        return value ? {
            _ts: value._ts,
            _from_app: value._from_app,
            locale: value.locale,
            country: value.country,
            timezone: value.timezone,
            currency: value.currency,
            number_format: value.number_format,
            first_day_of_week: value.first_day_of_week,
            long_date_format: value.long_date_format,
            short_date_format: value.short_date_format,
            long_time_format: value.long_time_format,
            short_time_format: value.short_time_format,
            time_offset: value.time_offset,
        } : null
    }
}
