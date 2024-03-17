import { describe, it } from "node:test";
// eslint-disable-next-line no-unused-vars
import { headTable, Types } from "../index.js";

describe("headTable()", () => {

    it("when called with a table that does not exist, should return a DBResult object, with an status set to 404, and an empty result key", () => {
        // Arrange
        const table = "non_existent_table";
        /** @type {Types.DBResult} */
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
        /** @type {Types.DBResult} */
        const expected = {
        status: 200,
        statusText: "OK",
        resultCount: 2,
        result: [],
        };
    
        // Act
        const result = headTable(table);
    
        // Assert
        assert.deepStrictEqual(result, expected);
    });
});

