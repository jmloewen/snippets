#a spacious but relatively fast method.  Max on each row and each column, a transposition, then an iteration through all. O(N)

class Solution(object):
    def maxIncreaseKeepingSkyline(self, grid):
        #this is a 'what is the max in this row/column' question.
        #for some arbitrary value at (m, n) where m is rows and n is columns
        #if some other value in row m has a value greater than A(m, n)
        #AND
        #some value in column n has a value greater than A(m, n)
        #THEN
        #value A(m, n) can be increased to the smaller of the two values without concern.  This can be done immediately and without consequence.
        #then we can immediately sum up the difference during this pass.
        
        #For each value in the grid,
        #get the smaller value of the max of row or column for that cell
        #sum difference between this value and the current value
        #return
        
        if not grid or not grid[0]:
            return 0
        
        maxRows = []
        maxCols = []
        for i in range(len(grid)):
            maxRows.append(max(grid[i]))
            
        tgrid = map(list, zip(*grid))#transposed matrix.
        
        for j in range(len(tgrid)):
            maxCols.append(max(tgrid[j]))
        
        sumMax = 0
        for i in range(len(maxCols)):
            for j in range(len(maxRows)):
                sumMax += min(maxCols[i], maxRows[j]) - grid[i][j]
        
        return sumMax
        
                           
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        