#Given an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
    #1.7.1: Do it in place.

    #Example:
'''
[[1,2,3,4],
 [5,6,7,8],
 [9,10,11,12],
 [13,14,15,16]]
 Becomes:
 [[13,9,5,1],
 [14,10,6,2],
 [15,11,7,3],
 [16,12,8,4]]
 '''
#Alternatively:
#https://stackoverflow.com/questions/8421337/rotating-a-two-dimensional-array-in-python
#zip(*original[::-1])
class Solution:
    def rotateMatrix(self, A):
        if not A or not A[0]:
            return [[]]

        N = len(A)-1

        even = False
        if N % 2 == 1:
            even = True
        #Reminder that i is rows, j is cols.
        for i in range(len(A)//2):
            for j in range(len(A)//2):
                #4 values can be updated on each iteration.
                A[i][j], A[j][N-i], A[N-i][N-j], A[N-j][i] = A[N-j][i], A[i][j], A[j][N-i], A[N-i][N-j]
                #Iteration 2 on 4x4:
                #[0][1], [0][2], [3][1], [3][2]
                #Want: [0][1], [1][3], [3][2], [2][0]
                #Expressed: [i][j], [j][N-i], [N-i][N-j], [N-j][i]

            if not even:
                #Rotate values in the middle.
                A[i][N//2], A[N//2][N-i], A[N-i][N//2], A[N//2][i] = A[N//2][i], A[i][N//2], A[N//2][N-i], A[N-i][N//2]

        return A
def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.")
        print("Output: ", F, "Expected: ", expected)
        return False
    return True

s = Solution()
tbtArr = [[1,2,3],[4,5,6],[7,8,9]]
testSolution(s.rotateMatrix(tbtArr), [[7,4,1],[8,5,2],[9,6,3]], 0)
testSolution(s.rotateMatrix([[1,2],[3,4]]), [[3,1],[4,2]], 1)

fbfArr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
testSolution(s.rotateMatrix(fbfArr), [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]], 2)
fibfiArr = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
testSolution(s.rotateMatrix(fibfiArr), [[21,16,11,6,1],[22,17,12,7,2],[23,18,13,8,3],[24,19,14,9,4],[25,20,15,10,5]], 3)
testSolution(s.rotateMatrix(fibfiArr), s.rotateMatrix(s.rotateMatrix(s.rotateMatrix(s.rotateMatrix(fibfiArr)))), 4)
testSolution(s.rotateMatrix([[1]]), [[1]], 5)
testSolution(s.rotateMatrix([[]]), [[]], 6)
