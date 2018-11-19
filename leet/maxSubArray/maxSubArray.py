#The classic maximum sum of a subarray problem.  in ctci as 'contiguous sequence'.
class Solution(object):
    def maxSubArray(self, nums):
        curSum = max(nums[0], 0)
        curMax = nums[0]
        for num in nums[1:]:
            curSum += num

            curMax = max(curMax, curSum)

            if curSum < 0:
                curSum = 0

        return curMax
