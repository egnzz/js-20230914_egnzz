/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const newArr = [...arr];
  const direct = param === 'asc' ? 1 : -1;
    return newArr.sort((a, b) => {
      return direct * a.localeCompare(b, ["ru", "en"], { caseFirst: 'upper'}); 
    });
}
