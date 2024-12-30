/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0;
    for (let i = 0; i<nums.length; i++){
        if(i>maxReach){
            return false
        } else {
            maxReach = Math.max(maxReach, i+nums[i]) //Math.max(记录当前能够到达的最远位置maxReach, 更新后最远可达位置)
        }
    }
    return true
};