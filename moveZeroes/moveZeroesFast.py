class Solution:
    def moveZeroes(self, nums):
        #Faster:
        #We don't need to keep the indexes of zeroes, we can simply count them.
        ctr = 0
        for i in range(len(nums)):
            if nums[i]:
                nums[ctr], nums[i] = nums[i], nums[ctr]
                ctr += 1
