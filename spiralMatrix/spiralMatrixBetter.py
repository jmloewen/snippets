#Still a 100% solution.
class Solution:
    #direction: 0 right - 1 down, 2 left, 3 up.
    def spiral(self, matrix, direction):
        curRow = []
        if matrix and matrix[0]:
            #If direction is 0 or 2, we want to remove an entire row from the matrix.
            if direction % 2 == 0:
                if direction == 0:
                    curRow = matrix.pop(0)
                else:
                    curRow = matrix.pop(-1)[::-1]
            else:
                #Direction is 1 or 3
                if direction == 1:
                    #want to traverse down the RHS of all remaining lists.
                    for row in matrix:
                        curRow.append(row.pop(-1))
                else:
                    for row in matrix:
                        curRow.append(row.pop(0))
                    curRow = curRow[::-1]
            return curRow + self.spiral(matrix, (direction + 1) % 4)
        else:
            return []

    def spiralOrder(self, matrix):
        #Recursive or iterative?
        #Record what level we're on - how many times we've rotated, then -1 every 4 rotations?
        return self.spiral(matrix, 0)
