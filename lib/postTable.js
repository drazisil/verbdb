import VerbDB from "./internal/database.js";

const postTableResponseCodes = Map();
postTableResponseCodes.set("TABLE_CREATED", 201, "Created");
postTableResponseCodes.set("TABLE_EXISTS", 304, "Not Modified (Table already exists)");
postTableResponseCodes.set("INTERNAL_SERVER_ERROR_NOT_FOUND", 500, "Internal Server Error (Table not found after creation)");
postTableResponseCodes.set("INTERNAL_SERVER_ERROR", 500, "Internal Server Error (Unknown)");

/**
 * Creates a new table in the verbDB.
 * @param {string} tableName - The name of the table to create.
 * @param {import("./types.js").VerbDBTableCreateDef} tableDefinition - The definition of the table to create.
 * @returns {string} - The status of the operation.
 * @throws {Error} - If the table is not found after creation.
 */
function createNewTable(tableName, tableDefinition) {
    VerbDB.tables.set(tableName, tableDefinition);

    const newTable = VerbDB.tables.get(tableName);

    if (newTable) {
        return "TABLE_CREATED";
    }

    throw Error("INTERNAL_SERVER_ERROR_NOT_FOUND");
}

/**
 * Retrieves the table from the verbDB based on the provided tableName.
 * @param {string} tableName - The name of the table to retrieve.
 * @returns {import("./types.js").DBResult} - The table.
 */
function fetchTable(tableName) {
    const table = VerbDB.tables.get(tableName);

    if (table) {
        return {
            status: 200,
            statusText: "OK",
            resultCount: table.rows.length,
            result: table,
        };
    }

    throw Error("TABLE_NOT_FOUND");
}

export function postTable(tableName, tableDefinition) {
    const tableExists = VerbDB.tables.has(tableName);

    if (tableExists) {
        return {
            status: postTableResponseCodes.get("TABLE_EXISTS").code,
            statusText: postTableResponseCodes.get("TABLE_EXISTS").text,
            resultCount: 0,
            result: {},
        };
    }

    try {
        createNewTable(tableName, tableDefinition);
        return fetchTable(tableName);
    } catch (error) {
        if (error.message === "INTERNAL_SERVER_ERROR_NOT_FOUND") {
            return {
                status: postTableResponseCodes.get("INTERNAL_SERVER_ERROR_NOT_FOUND").code,
                statusText: postTableResponseCodes.get("INTERNAL_SERVER_ERROR_NOT_FOUND").text,
                resultCount: 0,
                result: {},
            };
        }

        return {
            status: postTableResponseCodes.get("INTERNAL_SERVER_ERROR").code,
            statusText: postTableResponseCodes.get("INTERNAL_SERVER_ERROR").text,
            resultCount: 0,
            result: {},
        };
    }
}
