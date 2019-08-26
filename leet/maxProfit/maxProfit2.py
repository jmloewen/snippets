#scalped from g4g
#get the maximum profit in one direction. Then compare it with the maximum profit in the other direction up to this point.  Take the higher value.
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        if len(prices) < 2:
            return 0
        
        dp = [0] * len(prices) #the maximum profit that can be made by buying at this time
        curMax = prices[-1]
        
        #populate dp with a list of maximum profits.  after this, the max profit with only one transaction is sitting at dp[1].
        
        for i in range(len(prices) - 2, 0, -1):
            
            curMax = max(curMax, prices[i])
            
            dp[i] = max(dp[i + 1], curMax - prices[i])
            
        curMin = prices[0]
        
        for i in range(1, len(prices)):
            
            curMin = min(curMin, prices[i])
            
            dp[i] = max(dp[i - 1], dp[i] + (prices[i] - curMin))
            pass
        
        return dp[-1]   