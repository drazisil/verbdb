import { assert } from "console";
import { localizationMap } from "./internal/localization.js";

/**
 * Parses the LANG environment variable to get the locale.
 * returns "en" if no locale is found.
 * @returns {string} - The locale
 */
export function parseLangEnv() {
    const locale = process.env.LANG.split("_")[0];
    if (locale) {
        return locale;
    }
    return "en";
}



/**
 * Gets a localized string based on the provided code and locale.
 * @param {string} code - The localization code
 * @param {string} locale - The locale
 * @returns {string} - The localized string, or the code if no localization is found
 */
export const getL18nString = (code, locale) => {
    assert(code, "Code is required");
    assert(locale, "Locale is required");

    const localeMap = localizationMap.get(locale);
    if (localeMap) {
        const l18nString = localeMap.get(code);
        if (l18nString) {
        return l18nString;
        }
    }
    return code;
    
}