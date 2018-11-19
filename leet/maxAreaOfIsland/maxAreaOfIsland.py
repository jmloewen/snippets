class Solution:
    #VERY similar to count islands.
    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        if not grid or not grid[0]:
            return 0

        def dfs(r, c):
            #mark self as checked
            checked[r][c] = 1

            if grid[r][c] == '0':
                return 0

            ctr = 1
            #Recursively call dfs on neighbors of value '1'.
            #top left bottom right

            if r-1 >= 0 and grid[r-1][c] == 1 and checked[r-1][c] == 0:
                ctr += dfs(r-1, c)

            if c-1 >= 0 and grid[r][c-1] == 1 and checked[r][c-1] == 0:
                ctr += dfs(r, c-1)

            if r+1 < len(grid) and grid[r+1][c] == 1 and checked[r+1][c] == 0:
                ctr += dfs(r+1, c)

            if c+1 < len(grid[0]) and grid[r][c+1] == 1 and checked[r][c+1] == 0:
                ctr += dfs(r, c+1)


            return ctr

        rows = len(grid)
        cols = len(grid[0])
        checked = [[0] * cols for _ in range(rows)]
        islands = 0
        maxIsland = 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1 and checked[r][c] == 0:
                    maxIsland = max(maxIsland, dfs(r, c))
                else:
                    pass
        return maxIsland
