/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n=nums.length
    let currentFastestIndex = 0;
    let currentEndIndex = 0
    let jumps = 0

    for (i=0; i<n-1; i++){
        currentFastestIndex = Math.max(currentFastestIndex, nums[i]+i)
    

    if(i===currentEndIndex){
        jumps++;
        currentEndIndex = currentFastestIndex
        }
        if(currentEndIndex >= n-1){
            break
            
        }
    }
    return jumps
}