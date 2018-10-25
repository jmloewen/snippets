class Solution:
    #classic BFS problem.  I hate doing 2d grid traversal.
    def numIslands(self, grid):
        #Iterate through from top left.
        #Look for islands (Unchecked cell marked as '1')
            #If found an island tile, preform BFS on all contiguous cells to mark all cells as checked.
            #Else: Iterate continuously until find an unchecked '1' cell.
        """
        :type grid: List[List[str]]
        :rtype: int
        """

        if not grid or not grid[0]:
            return 0

        def bfs(r, c):
            #mark self as checked
            if grid[r][c] == '0':
                return False

            checked[r][c] = 1
            #Recursively call bfs on neighbors of value '1'.
            #top left bottom right

            if r-1 >= 0 and grid[r-1][c] == '1' and checked[r-1][c] == 0:
                bfs(r-1, c)

            if c-1 >= 0 and grid[r][c-1] == '1' and checked[r][c-1] == 0:
                bfs(r, c-1)

            if r+1 < len(grid) and grid[r+1][c] == '1' and checked[r+1][c] == 0:
                bfs(r+1, c)

            if c+1 < len(grid[0]) and grid[r][c+1] == '1' and checked[r][c+1] == 0:
                bfs(r, c+1)
            return True

        rows = len(grid)
        cols = len(grid[0])
        checked = [[0] * cols for _ in range(rows)]
        islands = 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1' and checked[r][c] == 0:
                    bfs(r, c)
                    islands += 1
                else:
                    pass
        return islands
