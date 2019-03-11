#fast but less memory efficient, vulnerable to overflow for large values of n.
class Solution(object):
    def climbStairs(self, n):
        #this is just fibbonacci sequence
        
        if n < 2:
            return 1
            
        
        seq = [1, 2]
        
        while len(seq) < n:
            seq.append(seq[-1] + seq[-2])
            
        return seq[-1]

#slow but more memory efficient
class Solution(object):
    def climbStairs2(self, n):
        #this is just fibbonacci sequence
        
        if n < 2:
            return 1
            
        
        seq = [1, 2]
        
        #now improve space comp
        i=2
        while i < n:
            seq.append(seq[-1] + seq[-2])
            seq.pop(0)
            i += 1
            
        return seq[-1]
            
            
        """
        :type n: int
        :rtype: int
        """
        
