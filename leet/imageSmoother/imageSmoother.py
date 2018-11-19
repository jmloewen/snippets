class Solution:
    def getSurroundingValues(self, M, i, j):
        #I hate doing this.  it's an obnoxious exercise.
        #Given the tile at M[i][j], store its average in A.
        tileSum = 0
        tileCount = 0
        for k in (-1, 0, 1):
            for l in (-1, 0, 1):
                if i+k >= 0 and i+k < len(M) and j+l >= 0 and j+l < len(M[0]):
                    tileSum += M[i+k][j+l]
                    tileCount += 1
        return tileSum // tileCount

    def imageSmoother(self, M):
        if not M or not M[0]:
            return []
        A = []
        for i in range(0, len(M)):
            A.append([0] * len(M[i]))
            for j in range(0, len(M[0])):
                A[i][j] = self.getSurroundingValues(M, i, j)
        return A
        
