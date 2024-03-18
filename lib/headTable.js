import VerbDB from "./internal/database.js";
import { getL18nString, parseLangEnv } from "./text.js";

/**
 * Retrieves the table summary from the verbDB based on the provided tableName.
 * @param {string} tableName - The name of the table to retrieve.
 * @returns {import("./types.js").DBResult} - The table summary.
 */
export function headTable(tableName) {
    const tableExists = VerbDB.tables.has(tableName);

    if (tableExists) {
        return {
            status: 200,
            statusText: getL18nString("OK", parseLangEnv()),
            resultCount: VerbDB.tables.get(tableName).rows.length,
            result: [],
        };
    }

    return {
        status: 404,
        statusText: getL18nString("TABLE_NOT_FOUND", parseLangEnv()),
        resultCount: 0,
        result: [],
    };
}