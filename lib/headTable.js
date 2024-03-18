import VerbDB from "./internal/database.js";

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
            statusText: "OK",
            resultCount: VerbDB.tables.get(tableName).rows.length,
            result: [],
        };
    }

    return {
        status: 404,
        statusText: "Table Not Found",
        resultCount: 0,
        result: [],
    };
}