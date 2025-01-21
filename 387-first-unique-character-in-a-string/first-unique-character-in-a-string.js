/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charCount = new Map();
    for (const char of s) {
        charCount.set(char, (charCount.get(char) ||0)+1)
    }

    for(let i=0; i<s.length; i++){
        if(charCount.get(s[i])===1){
            return i
        }
    }
    return -1
    
    
};

/*
	1.	统计字符频率：使用 JavaScript 的 Map 数据结构，遍历字符串并记录每个字符出现的次数。
	2.	查找唯一字符：再次遍历字符串，查看 Map 中记录的字符频率是否为 1，找到第一个满足条件的字符并返回其索引。
	3.	返回默认值：如果遍历完毕没有找到唯一字符，返回 -1。
*/