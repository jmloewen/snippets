#a bad 100%  solution.  there's almost certainly a formulaic way to do this.
class Solution(object):
    def getRow(self, rowIndex):
        
        #this is going to be a bad solution
        
        #row 0 - 1, row 1 - 1 1 - row 2 - 1 2 1
        
        if rowIndex < 2:
            return [1] * (rowIndex + 1)
        
        nex = [1, 1]
        i = 1
        
        while i < rowIndex:
            cur = nex
            nex = [1]
            j=0
            while j < len(cur)-1:
                nex.append(cur[j] + cur[j+1])
                j += 1
            nex.append(1)
            i += 1
        return nex
        