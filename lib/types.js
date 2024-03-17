/**
 * @module lib/types
 */

/**
 * @typedef {object} VerbDBTable - A table in the database
 * @property {string} name - The name of the table
 * @property {Array} columns - The columns of the table
 * @property {Array} rows - The rows of the table
 * @property {string} primaryKey - The primary key of the table
 */

/**
 * @typedef {object} DBResult - The result of a database operation
 * @property {number} status - The status code of the operation
 * @property {string} statusText - The status text of the operation
 * @property {number} resultCount - The number of results
 * @property {Array} result - The results of the operation
 */
export default {};
