/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 	输入参数：
	•	arr：要反转的数组。
	•	start：反转的起始索引。
	•	end：反转的结束索引。
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n

    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // 交换元素
            start++;
            end--;
        }
    };

    // 步骤 1: 反转整个数组 nums = [1,2,3,4,5,6,7] → 反转后 → [7,6,5,4,3,2,1]
    reverse(nums, 0, n - 1);

    // 步骤 2: 反转前 k 个元素 [7,6,5,4,3,2,1] → 反转前 3 个 → [5,6,7,4,3,2,1]
    reverse(nums, 0, k - 1);

    // 步骤 3: 反转剩余的元素 [5,6,7,4,3,2,1] → 反转剩余部分 [4,3,2,1] → [5,6,7,1,2,3,4]
    reverse(nums, k, n - 1);
};