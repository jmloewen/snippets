#Taken from the comments section.  Have to research bisect left.
#Bisect left finds the leftmost point to insert and retain sorted order on a sorted list.
#I believe that this does NOT necessarily produce the LIS, only the length of LIS.
class Solution(object):
    def lengthOfLIS(self, nums):
        if not nums:
            return 0

        subseq = []

        for i in range(len(nums)):
            p = bisect.bisect_left(subseq, nums[i])

            if len(subseq) == p:
                subseq.append(nums[i])
            else:
                subseq[p] = nums[i]
        return len(subseq)
