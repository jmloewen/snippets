class NumMatrix:
    #A 65% solution, done in like, 5 minutes.  There are definitely faster ways to do this with list comprehension.
    def __init__(self, matrix):
        #Initialize in a simple list format?
        self.matrix = matrix

    def update(self, row, col, val):
        self.matrix[row][col] = val

    def sumRegion(self, row1, col1, row2, col2):
        summate = 0
        for i in range(row1, row2+1):
            summate += sum(self.matrix[i][col1:col2+1])
        return summate
