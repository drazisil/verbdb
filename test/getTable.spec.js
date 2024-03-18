import assert from "node:assert";
import { describe, it } from "node:test";
import { getTable } from "../index.js";
import VerbDB from "../lib/internal/database.js";

describe("getTable()", () => {
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
    const result = getTable(table);

    // Assert
    assert.deepStrictEqual(result, expected);
  });

  it("when called with a table that exists, should return a DBResult object, with an status set to 200, and a result key with the table object", () => {
    // Arrange
    const table = "users";
    /** @type {import("../lib/types.js").DBResult} */
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
