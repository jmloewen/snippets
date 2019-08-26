class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        #looking for the largest positive jump between two values
        curMaxProfit = 0
        
        if len(prices) < 2:
            return 0
        curMax = prices[-1]
        
        
        for i in range(len(prices) - 1, -1, -1):
            curMaxProfit = max(curMaxProfit, curMax - prices[i])
            curMax = max(curMax, prices[i])
        return curMaxProfit