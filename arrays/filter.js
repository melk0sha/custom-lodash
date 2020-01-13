/**
 * Iterates over elements of array, returning an array of
 * all elements predicate returns truthy for. The predicate is invoked
 * with three arguments: (value, index, array).
 * 
 * @param {array} The array to iterate over
 * @param {function} The function invoked per iteration
 * @return {array} Returns the new filtered array
 *
 * @example:
 * var users = [
 *      { 'user': 'barney', 'age': 36, 'active': true },
 *      { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 * 
 * filter(users, function(value) { return !value.active; })       => object for ['fred']
 * filter(users, function(value, index) { return index < 1; })    => object for ['barney']
*/

function filter(arr, predicate) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`);
    }

    return arr.filter((el, idx, arr) => predicate(el, idx, arr));
}