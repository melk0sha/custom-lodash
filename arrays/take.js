/**
 * Creates a slice of array with n elements taken from the beginning.
 * 
 * @param {array} The array to query
 * @param {number} The number of elements to take
 * @return {array} Returns the slice of array
 *
 * @example:
 * take([1, 2, 3]) => [1]
 * take([1, 2, 3], 2) => [1, 2]
 * take([1, 2, 3], 5) => [1, 2, 3]
 * take([1, 2, 3], 0) => []
*/

function take(arr, num = 1) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`);
    }

    return arr.filter((el, i) => i < num);
}