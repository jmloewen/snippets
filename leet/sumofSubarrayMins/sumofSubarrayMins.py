class Solution(object):
    def sumSubarrayMins(self, A):
        #This solution works, but is too slow at O(N^2).

        #next is minimum of each set of 2 contiguous values.  in 3124, this is 31, 12, 24.  mins are 1, 1, 2.
        #next is minimum of each set of 3 contiguous values.  in 3124, this is 312, 124.  the minimums of these are ths mins of the previous two values above - 1 vs 1, 1 vs 2.  this results in 1 and 1.
        #next is minimum of each set of 4 contiguous values.  this is just 3124 - and the min of this is min(1, 1) which is 1.
        dp = [[0] * len(A) for _ in range(len(A) - 1)]
        dp.insert(0, A)
        sumMins = sum(A)

        #A working, but slow solution.  It's O(N^2 / 2).
        #How can we increase data reuse?
        for i in range(1, len(A)):
            for j in range(len(A) - i):
                dp[i][j] = min(dp[i-1][j], dp[i-1][j+1])
                sumMins += dp[i][j]


        #Properties:
        #the last row will always be composed of only the minimum value of A.
            #During each new subset, we either come across a new minimum, or we add an irrelevant value.  There are only two options.
            #
        return sumMins % (10**9 + 7)

        """
        :type A: List[int]
        :rtype: int
        """
        
