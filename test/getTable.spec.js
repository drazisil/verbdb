import assert from "node:assert";
import { describe, it } from "node:test";
// eslint-disable-next-line no-unused-vars
import { getTable, Types } from "../index.js";
import VerbDB from "../lib/database.js";

describe("getTable()", () => {
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
    const result = getTable(table);

    // Assert
    assert.deepStrictEqual(result, expected);
  });

  it("when called with a table that exists, should return a DBResult object, with an status set to 200, and a result key with the table object", () => {
    // Arrange
    const table = "users";
    /** @type {Types.DBResult} */
    const expected = {
      status: 200,
      statusText: "OK",
      resultCount: 2,
      result: {
        name: "users",
        columns: ["id", "name", "email"],
        rows: [
          { id: 1, name: "Alice", email: "" },
          { id: 2, name: "Bob", email: "" },
        ],
        primaryKey: "id",
      },
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
    const result = getTable(table);

    // Assert
    assert.deepStrictEqual(result, expected);
  });
});
