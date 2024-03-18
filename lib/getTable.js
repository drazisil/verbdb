// eslint-disable-next-line no-unused-vars
import VerbDB from "./internal/database.js";

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