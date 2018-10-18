class Solution:
    def moveZeroes(self, nums):
        if not nums:
            return
        zQ = []
        for i in range(0, len(nums)):
            if nums[i] == 0:
                zQ.append(i)
            else:
                if zQ:
                    #swap
                    #nums at pos i is now that first zero.
                    nums[zQ[0]], nums[i] = nums[i], nums[zQ[0]]
                    #Remove first zero, append new value to the end.
                    zQ.pop(0)
                    zQ.append(i)
                #else continue - there's no zero to swap with yet.
