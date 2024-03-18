/**
 * @module lib/internal/localization
 */

/** @type {Map<string, string>} */
const l18nStrings_en = new Map();
l18nStrings_en.set("OK", "OK");
l18nStrings_en.set("TABLE_NOT_FOUND", "Table Not Found");
l18nStrings_en.set("TABLE_CREATED", "Created");
l18nStrings_en.set("TABLE_EXISTS", "Not Modified (Table already exists)");
l18nStrings_en.set("TABLE_INTERNAL_SERVER_ERROR_NOT_FOUND", "Internal Server Error (Table not found after creation)");

/** @type {Map<string, Map<string, Map<string, string>>>} */
export const localizationMap = new Map();
localizationMap.set("en", l18nStrings_en);


