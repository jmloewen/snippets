#Follow the grid down and right from the top left, summing first row and column, and taking min of intermediary values.
class Solution(object):
    def minPathSum(self, grid):
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if not r and c:
                    grid[r][c] += grid[r][c-1]
                elif r and not c:
                    grid[r][c] += grid[r-1][c]
                elif r and c:
                    grid[r][c] += min(grid[r-1][c], grid[r][c-1])
        return grid[-1][-1]
        
