// eslint-disable-next-line no-unused-vars
import VerbDB from "./internal/database.js";
import { getL18nString, parseLangEnv } from "./text.js";

/**
 * Retrieves the table from the verbDB based on the provided tableName.
 * @param {string} tableName - The name of the table to retrieve.
 * @returns {import("./types.js").VerbDBTable} - The table object.
 */
export function getTable(tableName) {
    const table = VerbDB.tables.get(tableName);

    if (table) {
        return {
            status: 200,
            statusText: getL18nString("OK", parseLangEnv()),
            resultCount: table.rows.length,
            result: table,
        };
    }

    return {
        status: 404,
        statusText: getL18nString("TABLE_NOT_FOUND", parseLangEnv()),
        resultCount: 0,
        result: [],
    };
}