#Given a matrix, if there is a Zero in it, make the row and column of that space also filled with zeroes.
#Extra space solution:
        #Second matrix, cloned.
        #When Zero found in A, fill that second matrix's row and column with Zeroes.
        #& the two together.
#Iterative solution:
    #Iterate through on Columns.
    #Store Rows that we must Zero in a stack.
    #Zero them afterwards with a slice.

#This is a two pass algorithm.
        #could conceivably do it in one pass with this same set of "To Be Zeroed" columns.  However, this would require a search of the set on each column, which is probably less efficient than the 2N setup that exists here.
        #There's likely a faster way than this, though.
class Solution:
    def zeroMatrix(self, A):
        if not A or not A[0]:
            return [[]]
        rows = len(A)
        cols = len(A[0])
        rowZero = False
        colZero = set()

        for i in range(rows):
            for j in range(cols):
                if A[i][j] == 0:
                    rowZero = True
                    colZero.add(j)
            if rowZero:
                A[i] = [0] * cols
                rowZero = False

        for col in colZero:
            for i in range(rows):
                A[i][col] = 0
        return A



def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.")
        print("Output: ", F, "Expected: ", expected)
        return False
    return True

s = Solution()

testSolution(s.zeroMatrix([[1,2],[3,4]]),[[1,2],[3,4]],0)
testSolution(s.zeroMatrix([[0,2],[3,4]]),[[0,0],[0,4]],1)
testSolution(s.zeroMatrix([[0,2],[3,0]]),[[0,0],[0,0]],2)
testSolution(s.zeroMatrix([[0]]),[[0]],3)
testSolution(s.zeroMatrix([[]]),[[]],4)
testSolution(s.zeroMatrix([[1]]),[[1]],5)
testSolution(s.zeroMatrix([[1,2,3],[4,5,6],[7,8,9]]),[[1,2,3],[4,5,6],[7,8,9]],6)
testSolution(s.zeroMatrix([[1,2,3],[4,0,6],[7,8,9]]),[[1,0,3],[0,0,0],[7,0,9]],7)
testSolution(s.zeroMatrix([[1,2,3],[4,5,6],[7,8,0]]),[[1,2,0],[4,5,0],[0,0,0]],8)
testSolution(s.zeroMatrix([[0,2,3],[4,5,6],[7,8,0]]),[[0,0,0],[0,5,0],[0,0,0]],9)
