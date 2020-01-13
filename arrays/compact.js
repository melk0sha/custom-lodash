/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * 
 * @param {array} The array to compact
 * @return {array} Returns the new array of filtered values
 *
 * @example:
 * compact([0, 1, false, 2, '', 3])        => [1, 2, 3]
*/

function compact(arr) {
    return arr.filter((el) => Boolean(el) === true);
}