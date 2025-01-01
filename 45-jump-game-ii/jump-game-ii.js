/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length
    let currentEndIndex = 0;
    let curentfarestIndex = 0;
    let jumps=0

    for(let i=0; i<n -1; i++){
    curentfarestIndex = Math.max(curentfarestIndex, i+nums[i]);

    if(i===currentEndIndex){
        jumps++;
        currentEndIndex=curentfarestIndex;

        if(currentEndIndex >= n-1){
            break
            }
        }
    }
    return jumps;
};