#A simple problem.  Leetcode contest 100, 90%
class Solution(object):
    def isMonotonic(self, A):

        if len(A) <= 2:
            return True

        incr = None
        if A[1] > A[0]:
            incr = True
        elif A[0] > A[1]:
            incr = False

        for i in range(2, len(A)):
            if incr is None:
                #we dont know yet.
                if A[i] > A[i-1]:
                    incr = True
                elif A[i] < A[i-1]:
                    incr = False
            elif incr:
                if A[i] < A[i-1]:
                    return False
            else:
                if A[i] > A[i-1]:
                    return False
        return True


        """
        :type A: List[int]
        :rtype: bool
        """
        
