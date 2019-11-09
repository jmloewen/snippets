#a 99% solution.  This can probably be done in one pass.
class Solution:
    def matrixReshape(self, nums: List[List[int]], r: int, c: int) -> List[List[int]]:
        ctr = 0
        if r * c != len(nums) * len(nums[0]):
            return nums
        flat = []
        
        new = []
        
        #gross, it's o(2N).  can probably do in one pass.
        
        for i in range(len(nums)):
            for j in range(len(nums[0])):
                flat.append(nums[i][j])
        
        for i in range(r):
            row = []
            for j in range(c):
                row.append(flat.pop(0))
            
            new.append(row)
        return new
        
'''
566. Reshape the Matrix
Easy

In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:

Input: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4
Output: 
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.

Example 2:

Input: 
nums = 
[[1,2],
 [3,4]]
r = 2, c = 4
Output: 
[[1,2],
 [3,4]]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.


'''