/**
 * Creates a slice of array excluding elements dropped from the beginning.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 * 
 * @param {array} The array to query
 * @param {function} The function invoked per iteration
 * @return {array} Returns the slice of array
 *
 * @example:
 * var users = [
 *      { 'user': 'barney',  'active': false },
 *      { 'user': 'fred',    'active': false },
 *      { 'user': 'pebbles', 'active': true }
 * ];
 * 
 * dropWhile(users, function(value) { return !value.active; })         => object for ['pebbles']
 * dropWhile(users, function(value, index) { return index > 1; })      => objects for ['barney', 'fred']
*/

function dropWhile(arr, predicate) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`);
    }
    
    return arr.filter((el, idx, arr) => !predicate(el, idx, arr));
}