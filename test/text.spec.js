import { describe, it } from "node:test";
import { parseLangEnv, getL18nString } from "../index.js";
import assert from "node:assert";

describe("parseLangEnv()", () => {
    it("should return the locale when the LANG environment variable is set", () => {
        // Arrange
        process.env.LANG = "es_ES.UTF-8";
        const expected = "es";
        // Act
        const result = parseLangEnv();
        // Assert
        assert.strictEqual(result, expected);
    });
    
    it("should return 'en' when the LANG environment variable is not set", () => {
        // Arrange
        process.env.LANG = "";
        const expected = "en";
        // Act
        const result = parseLangEnv();
        // Assert
        assert.strictEqual(result, expected);
    });
});

describe("getL18nString()", () => {
    it("should return the localized string when a localization is found", () => {
        // Arrange
        const code = "TABLE_NOT_FOUND";
        const locale = "en";
        const expected = "Table Not Found";
        // Act
        const result = getL18nString(code, locale);
        // Assert
        assert.strictEqual(result, expected);
    });
    
    it("should return the code when a localization is not found", () => {
        // Arrange
        const code = "NOT_FOUND_NOT_FOUND_NOT";
        const locale = "en";
        const expected = "NOT_FOUND_NOT_FOUND_NOT";
        // Act
        const result = getL18nString(code, locale);
        // Assert
        assert.strictEqual(result, expected);
    });
});
