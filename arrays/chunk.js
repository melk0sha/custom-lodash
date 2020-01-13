/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * 
 * @param {array} The array to process
 * @param {number} The length of each chunk
 * @return {array} Returns the new array of chunks
 *
 * @example:
 * chunk(['a', 'b', 'c', 'd'], 2)     => [['a', 'b'], ['c', 'd']]
 * chunk(['a', 'b', 'c', 'd'], 3)     => [['a', 'b', 'c'], ['d']]
*/

function chunk(arr, num) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`);
    }

    const result = [];
    let innerArr = [];
    let innerNum = num;

    arr.forEach((el, i) => {
        if (i !== innerNum) {
            innerArr.push(el);
        } else {
            result.push(innerArr);
            innerArr = [];
            innerArr.push(el);
            innerNum = num + i;
        }
    });

    if (innerArr.length !== 0) {
        result.push(innerArr);
    }

    return result;
}