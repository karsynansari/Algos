/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min_index]) {
        min_index = j;
      }
    }
    let swappedIndex = nums[i];
    nums[i] = nums[min_index];
    nums[min_index] = swappedIndex;
  }
  console.log("\n \n");
  return nums;
}; 

