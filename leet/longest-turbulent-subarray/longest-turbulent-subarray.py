#this is suboptimal but it worked first try, so yay.
class Solution(object):
    def maxTurbulenceSize(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        if len(A) < 2:
            len(A)
        curCount = maxCount = 1
        sign = None #where true is 'this value is greater than previous', false is 'this value is less than previous' and None is 'values are the same'.
        for i in range(1, len(A)):
            if A[i] == A[i-1]:
                maxCount = max(maxCount, curCount)
                curCount = 1
                sign = None
            elif A[i] > A[i-1]:
                if sign is None or sign:
                    maxCount = max(maxCount, curCount)
                    curCount = 2
                else:
                    curCount += 1
                    maxCount = max(maxCount, curCount)
                sign = True
            else: #A[i] < A[i-1]
                if sign:
                    curCount += 1
                    maxCount = max(maxCount, curCount)
                else:
                    maxCount = max(maxCount, curCount)
                    curCount = 2
                sign = False
                
        maxCount = max(maxCount, curCount)
        
        return maxCount
                    
            