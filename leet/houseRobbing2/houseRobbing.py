#A 100% solution, based off of the solution from HR1 and the hints, just done twice on two different indices then compared 
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

        #need 2 separate scans, one for 0 to n-1, one for 1-n

        dp = [nums[0]]
        dp.append(max(nums[0], nums[1]))

        for i in range(2, len(nums)-1):
            dp.append(max(nums[i] + dp[i-2], dp[i-1]))

        dp2 = [nums[1]]
        dp2.append(max(nums[1], nums[2]))

        for i in range(3, len(nums)):
            dp2.append(max(nums[i] + dp2[i-3], dp2[i-2]))
        return max(dp[-1], dp2[-1])

        """
        :type nums: List[int]
        :rtype: int
        """
