#A 99% solution.
class Solution:
    def twoSum(self, nums, target):
        comps = {}

        #for all numbers:
        for i in range(len(nums)):
            comp = target - nums[i]

            #find the compliment in the stored compliments.
            if comps.get(nums[i], -1) is not -1:
                #Return the index where it occurred, as well as this index.
                return (comps.get(nums[i]), i)
            #if it's not in the dictionary, add it to the dictionary.
            else:
                comps[target-nums[i]] = i
