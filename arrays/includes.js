/**
 * Checks if value is in collection. If collection is a string,
 * it's checked for a substring of value, otherwise SameValueZero
 * is used for equality comparisons. If fromIndex is negative,
 * it's used as the offset from the end of collection.
 * 
 * @param {array} The array to inspect
 * @param {*} The value to search for
 * @param {number} The index to search from
 * @return {boolean} Returns true if value is found, else false
 *
 * @example:
 * includes([1, 2, 3], 1)               => true
 * includes([1, 2, 3], 1, 2)            => false
*/

function includes(arr, value, number = 0) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`);
    }

    let result = false;

    arr.forEach((el, idx) => {
        if (idx >= number && el === value) {
            result = true;
        }
    });

    return result;
}