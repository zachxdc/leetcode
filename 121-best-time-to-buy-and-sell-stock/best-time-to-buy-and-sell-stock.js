/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity; // 初始化最低价格为正无穷
    let maxProfit = 0;       // 初始化最大利润为0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            // 更新最低价格
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            // 计算利润并更新最大利润
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};