/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0;
    for(let i=0; i<nums.length; i++){
        if(i>maxReach)  return false 
        else{
            maxReach = Math.max(maxReach, nums[i]+i)
        } 
    }
    return true
};



