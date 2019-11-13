class Solution:
    #somehow, a 99.6% solution
    def summaryRanges(self, nums: List[int]) -> List[str]:
        
        ret = []
        rng = []
        
        for i in range(len(nums)):
            if len(rng) == 0:
                rng.append(nums[i])
            else:
                if nums[i] - 1 == rng[-1]:
                    rng.append(nums[i])
                else:
                    if len(rng) > 1:
                        ret.append(str(rng[0]) + "->" + str(rng[-1]))
                    else:
                        ret.append(str(rng[0]))
                    
                    rng = [nums[i]]
                
        if len(rng) == 1:
            ret.append(str(rng[0]))
        elif len(rng) > 1:
            ret.append(str(rng[0]) + "->" + str(rng[-1]))
        return ret

'''228. Summary Ranges
Medium

Given a sorted integer array without duplicates, return the summary of its ranges.

Example 1:

Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.

Example 2:

Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.


'''