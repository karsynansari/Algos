/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let compObj = {}; 
 
    for(i=0; i<arr.length; i++) {
    let el = arr[i]
         if (compObj.hasOwnProperty(el)) {
           compObj[el] = compObj[el] + 1
         } else {
           compObj[el] = 1
         }
    } 
  let compObjKeys = Object.values(compObj);
  console.log(compObjKeys)
  for(i=0; i<compObjKeys.length; i++) {
    for(j=i+1; j<compObjKeys.length; j++) {
    if (compObjKeys[i] === compObjKeys[j]) {
      return false 
    }
  }
     }
  return true
}; 