#A simple 88% solution for a simple DP problem.  Done in Linear time with no extra space.
class Solution(object):
    def minFallingPathSum(self, A):

        for i in range(1, len(A)):
            for j in range(len(A[0])):
                #check values above left, above, and above right.
                if 0 < j < len(A[0])-1:
                    A[i][j] += min(A[i-1][j-1], A[i-1][j], A[i-1][j+1])
                elif j == 0:
                    A[i][j] += min(A[i-1][j], A[i-1][j+1])
                elif j == len(A[0]) - 1:
                    A[i][j] += min(A[i-1][j-1], A[i-1][j])

        return min(A[-1])
        """
        :type A: List[List[int]]
        :rtype: int
        """
