import CookieStore from './cookie-store'

export default class LocalizationCookieStore extends CookieStore {
    retrieve() {
        if (this.disabled) return null

        const localization = super.retrieve()
        return localization ? {
            _ts: localization._ts,
            _from_app: localization._from_app,
            locale: localization.locale,
            country: localization.country,
            timezone: localization.timezone,
            currency: localization.currency,
            number_format: localization.number_format,
            first_day_of_week: localization.first_day_of_week,
            long_date_format: localization.long_date_format,
            short_date_format: localization.short_date_format,
            long_time_format: localization.long_time_format,
            short_time_format: localization.short_time_format,
            time_offset: localization.time_offset,
        } : this.def
    }

    store(localization) {
        if (this.disabled) return null

        return super.store({
            _ts: localization._ts,
            _from_app: localization._from_app,
            locale: localization.locale,
            country: localization.country,
            timezone: localization.timezone,
            currency: localization.currency,
            number_format: localization.number_format,
            first_day_of_week: localization.first_day_of_week,
            long_date_format: localization.long_date_format,
            short_date_format: localization.short_date_format,
            long_time_format: localization.long_time_format,
            short_time_format: localization.short_time_format,
            time_offset: localization.time_offset,
        })
    }
}
