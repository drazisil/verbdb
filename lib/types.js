/**
 * @module lib/types
 * @typedef {Object} VerbDBTable
 * @exports {Object} DBResult
 */

/**
 * @typedef {Object} VerbDBTable
 * @property {string} name
 * @property {Array} columns
 * @property {Array} rows
 * @property {string} primaryKey
 */

/**
 * @typedef {Object} DBResult
 * @property {number} status
 * @property {string} statusText
 * @property {number} resultCount
 * @property {Array} result
 */
export default {
  VerbDBTable: {
    name: "",
    columns: [],
    rows: [],
    primaryKey: "",
  },
  DBResult: {
    status: 0,
    statusText: "",
    resultCount: 0,
    result: [],
  },
};
