class Solution(object):
    def rob(self, nums):
        #0 and 2 or 1.
        #if take 1, 1 > (0 + 2)  therefore 1 + 3 > (0 + 2), or 1 + (4 + ...) > (0 + 2)

        if len(nums) == 0:
            return 0
        elif len(nums) == 1:
            return nums[0]
        elif len(nums) == 2:
            return max(nums[0], nums[1])
        dp = [nums[0]]
        dp.append(max(nums[0], nums[1]))

        for i in range(2, len(nums)):
            dp.append(max(nums[i] + dp[i-2], dp[i-1]))

        return dp[-1]

        """
        :type nums: List[int]
        :rtype: int
        """
        
