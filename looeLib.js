/**
 * Converts a decimal number to hexadecimal number.
 *
 * @param {number} decimalValue - The decimal number to convert.
 * @returns {number} The hexadecimal value
 */
export function convertDecimalToHex(decimalValue) {
  return decimalValue.toString(16);
}

/**
 * Gets the right part of a string.
 *
 * @param {string} string - The string to get the right part of.
 * @param {number} length - The length of the right part.
 * @returns {string} The right part of the string.
 */
export function getRghtSubstring(string, length) {
  return string.substring(string.length - length);
}

/**
 * Gets the position of a character in a string.
 *
 * @param {string} string - The string to search in.
 * @param {string} subString - The subString to search for.
 * @param {*} startPosition - The start position of the search.
 * @returns
 */
export function getSubstringPosition(string, subString, startPosition) {
  return string.indexOf(subString, startPosition);
}
