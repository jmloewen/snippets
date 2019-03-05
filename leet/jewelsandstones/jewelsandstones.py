#very simple and also slow

class Solution(object):
    def numJewelsInStones(self, J, S):
        
        filtered = S
        while J:
            filtered = ''.join(filtered.split(J[-1]))
            J = J[:-1]
            
        return len(S) - len(filtered)
        """
        :type J: str
        :type S: str
        :rtype: int
        """
        