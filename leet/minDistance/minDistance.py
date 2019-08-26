class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        #longest common subsequence but you're counting the number of extra characters in each string instead of the total length of the common subsequence.
        
        dp = [[None] * (1 + len(word2)) for i in range(len(word1) + 1)]
        
        
        for i in range(1 + len(word1)):
            for j in range(1 + len(word2)):
                if i == 0 or j == 0:
                    dp[i][j] = 0
                elif word1[i-1] == word2[j-1]:
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        
        #length of subsequence is now dp[-1][-1]
        #the number of steps is len(word1) - dp[-1][-1] + len(word2) - dp[-1][-1]
        return (len(word1) - dp[-1][-1]) + (len(word2) - dp[-1][-1])
    