/* eslint-disable indent */
/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let sortedObj = [];

    Object.entries(obj).forEach((key, index) => {
        if (fields.includes(key[0])) {
            sortedObj.push(Object.entries(obj)[index]);
        }
    });
    
    return Object.fromEntries(sortedObj);
};
