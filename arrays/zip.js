/**
 * Creates an array of grouped elements, the first of which contains
 * the first elements of the given arrays, the second of which
 * contains the second elements of the given arrays, and so on.
 * 
 * @param {...arrays} The arrays to process
 * @return {array} Returns the new array of grouped elements
 *
 * @example:
 * zip(['a', 'b'], [1, 2], [true, false])       => [['a', 1, true], ['b', 2, false]]
*/

function zip(...arrays) {
    if (!Array.isArray(...arrays)) {
        throw new TypeError(`${arr} is not an array`);
    }

    const result = [];

    for (let i = 0; i < arrays.length; i++) {
        const innerArr = [];
        arrays.forEach((el) => {
            if (el[i] !== undefined) {
                innerArr.push(el[i]);
            }
        });
        if (innerArr.length) {
            result.push(innerArr);
        }
    }

    return result;
}