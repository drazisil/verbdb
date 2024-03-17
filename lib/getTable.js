// eslint-disable-next-line no-unused-vars
import * as Types from "./types.js";
import VerbDB from "./database.js";

/**
 * Retrieves the table from the verbDB based on the provided tableName.
 * @param {string} tableName - The name of the table to retrieve.
 * @return {Types.DBResult} - The table object.
 */
export function getTable(tableName) {
    const table = VerbDB.tables.get(tableName);

    if (table) {
        return {
            status: 200,
            statusText: "OK",
            resultCount: table.rows.length,
            result: table,
        };
    }

    return {
        status: 404,
        statusText: "Table Not Found",
        resultCount: 0,
        result: [],
    };
}