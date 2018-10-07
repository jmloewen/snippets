class Solution:
    #Given two straight line segments represented as a start point and an end point, compute the point of intersection, if any.

    #I'm guessing this is supposed to take place in 2d space.

    def ticTacWin(self, A):
        #In a 3x3 game of tictactoe, find if there is currently a winner.

        tl = A[0][0]
        mid = A[1][1]
        br = A[2][2]
        if tl == "O" or tl == "X":
            if A[0][0] == A[0][1] == A[0][2] or A[0][0] == A[1][0] == a[2][0] or A[0][0] == A[1][1] == A[2][2]:
                return True
        if mid == "O" or mid == "X":
            if A[1][1] == A[0][2] == A[2][0] or A[1][0] == A[1][1] == A[1][2]:
                return True
        if br == "O" or br == "X":
            if A[2][2] == A[2][1] == A[2][0] or A[2][2] == A[1][2] == A[0][2]:
                return True
        return False


def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.  Expected: ", expected, "Received: ", F)
        return False
    return True

s = Solution()
