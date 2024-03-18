import { describe, it } from "node:test";
import { headTable } from "../index.js";
import assert from "node:assert";
import VerbDB from "../lib/internal/database.js";

describe("headTable()", () => {

    it("when called with a table that does not exist, should return a DBResult object, with an status set to 404, and an empty result key", () => {
        // Arrange
        const table = "non_existent_table";
        /** @type {import("../lib/types.js").DBResult} */
        const expected = {
        status: 404,
        statusText: "Table Not Found",
        resultCount: 0,
        result: [],
        };
    
        // Act
        const result = headTable(table);
    
        // Assert
        assert.deepStrictEqual(result, expected);
    });
    
    it("when called with a table that exists, should return a DBResult object, with an status set to 200, a resultCount set to the number of rows in the table, and an empty result key", () => {
        // Arrange
        const table = "users";
        /** @type {import("../lib/types.js").DBResult} */
        const expected = {
        status: 200,
        statusText: "OK",
        resultCount: 2,
        result: [],
        };
        VerbDB.tables.set("users", {
            name: "users",
            columns: ["id", "name", "email"],
            rows: [
                { id: 1, name: "Alice", email: "" },
                { id: 2, name: "Bob", email: "" },
            ],
            primaryKey: "id",
            });
    
        // Act
        const result = headTable(table);
    
        // Assert
        assert.deepStrictEqual(result, expected);
    });
});

