#Does not use constant space.
class Solution:
    def firstMissingPositive(self, nums):
        if not nums:
            return 1

        fmpA = [0] * len(nums)

        for num in nums:
            if num in range(1, len(nums)+1):
                fmpA[num-1] = 1

        for i in range(0, len(fmpA)):
            if fmpA[i] == 0:
                return i+1
        return len(nums) + 1
