#Given a 2-D matrix representing an image, a location of a pixel in the screen and a color C, replace the color of the given pixel and all adjacent same colored pixels with C. For example, given the following matrix, and location pixel of (2, 2), and 'G' for green: B B W W W W W W W B B B Becomes B B G G G G G G G B B B

#simple interpretation - only immediately adjacent colors - 8 values to check.
def colorAdjacent(A, row, col, C):
    match = None
    if A and A[row] and A[row][col]:
        match = A[row][col] #match should now be some letter
        A[row][col] = C
    else:
        return A #invalid inputs
    
    #top row
    
    if row > 0:
        if A[row-1] and A[row-1][col] == match:
            A[row-1][col] = C
        
        if col > 0: 
            if A[row-1] and A[row][col-1] and A[row-1][col-1] == match:
                A[row-1][col-1] = C
        if col < len(A[0]) - 1:
            if A[row-1] and A[row][col+1] and A[row-1][col+1] == match:
                A[row-1][col+1] = C
    
    if col > 0:
        if A[row][col-1] and A[row][col-1] == match:
            A[row][col-1] = C
    if col < len(A[0]) - 1:
        if A[row][col+1] and A[row][col+1] == match:
            A[row][col+1] = C
    if row < len(A) - 1:
        if A[row+1] and A[row+1][col] == match:
            A[row+1][col] = C
            
        if col > 0:
            if A[row+1] and A[row+1][col-1] and A[row+1][col-1] == match:
                A[row+1][col-1] = C
        if col < len(A[0]) - 1:
            if A[row+1] and A[row+1][col+1] and A[row+1][col+1] == match:
                A[row+1][col+1] = C
    return A

test=[[1,1,1,1],[2,1,1,1],[3,2,1,1],[4,3,2,1]]
print(test)
print(colorAdjacent(test, 2, 2, 5))
    
    
