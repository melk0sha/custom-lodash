/**
 * Creates an array of values by running each element in array
 * thru iteratee. The iteratee is invoked with three arguments:
 * (value, index, array).
 * 
 * @param {array} The array to iterate over
 * @param {function} The function invoked per iteration
 * @return {array} Returns the new mapped array
 *
 * @example:
 * function square(value, index, array) {
 *      return value * value;
 * }
 * 
 * map([4, 8], square)      => [16, 64]
*/

function map(arr, iteratee) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`);
    }

    return arr.map((el, idx, arr) => iteratee(el, idx, arr));
}