/* eslint-disable indent */
/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let sortedObj = [];

    Object.entries(obj).forEach((key, index) => {
        if (!fields.includes(key[0])) {
            sortedObj.push(Object.entries(obj)[index]);
        }
    });
    
    return Object.fromEntries(sortedObj);

};
