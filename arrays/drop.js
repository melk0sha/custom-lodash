/**
 * Creates a slice of array with n elements dropped from the beginning.
 * 
 * @param {array} The array to query
 * @param {number} The number of elements to drop
 * @return {array} Returns the slice of array
 *
 * @example:
 * drop([1, 2, 3])          => [2, 3]
 * drop([1, 2, 3], 2)       => [3]
 * drop([1, 2, 3], 5)       => []
 * drop([1, 2, 3], 0)       => [1, 2, 3]
*/

function drop(arr, num = 1) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`);
    }
    
    return arr.filter((el, i) => i >= num);
}