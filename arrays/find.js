/**
 * Iterates over elements of array, returning the first
 * element predicate returns truthy for. The predicate is invoked with
 * three arguments: (value, index, array).
 * 
 * @param {array} The array to inspect
 * @param {function} The function invoked per iteration
 * @param {number} The index to search from
 * @return {array || undefined} Returns the matched array, else undefined
 *
 * @example:
 * var users = [
 *      { 'user': 'barney',  'age': 36, 'active': true },
 *      { 'user': 'fred',    'age': 40, 'active': false },
 *      { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 * 
 * find(users, function(value) { return value.age < 40; })      => object for 'barney'
 * find(users, function(value) { return value.age < 40; }, 1)   => object for 'pebbles'
 * find(users, function(value, index) { return index > 1; })   => object for 'pebbles'
*/

function find(arr, predicate, num = 0) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`);
    }

    return arr.find((el, idx) => (idx >= num) ? predicate(el, idx, arr) : false);
}