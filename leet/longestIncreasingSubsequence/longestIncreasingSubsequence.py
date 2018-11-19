#A slow 25% O(N^2) solution.
class Solution(object):
    def lengthOfLIS(self, nums):
        #O(N^2 - can simply compare to later values)

        if not nums:
            return 0

        dp = [1] * len(nums) #all values are inherently 1.

        for i in range(len(nums) - 1):
            for j in range(i+1, len(nums)):
                if nums[j] > nums[i]:
                    #then this number increases the subsequence.
                    dp[j] = max(dp[j], dp[i] + 1)
        return max(dp)
