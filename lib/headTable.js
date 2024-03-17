import VerbDB from "./database.js";
// eslint-disable-next-line no-unused-vars
import * as Types from "./types.js";

/**
 * Retrieves the table summary from the verbDB based on the provided tableName.
 * @param {string} tableName 
 * @return {Types.DBResult}
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