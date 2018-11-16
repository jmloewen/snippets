#a slow maximal square solution, as written on whiteboard, with one fix
class Solution(object):
    def maximalSquare(self, matrix):
        curMax = 0

        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if i == 0 or j == 0 or matrix[i][j] == '0':
                    pass
                else:
                    a, b, c = int(matrix[i-1][j-1]), int(matrix[i-1][j]), int(matrix[i][j-1])
                    minVal = min(a, b, c)
                    maxVal = max(a,b,c)

                    if minVal == maxVal:
                        matrix[i][j] = maxVal + 1
                    else:
                        #I Had this line wrong on whiteboard.
                        matrix[i][j] = minVal + 1

                curMax = max(curMax, int(matrix[i][j]))
        return curMax ** 2
