#A 'gotcha' question in every sense of the word.  90% solution
#this would be a much more difficult question if you had to actually find the minimum number of ways to create the best string

class Solution(object):
    def orderlyQueue(self, S, K):
        minList = S
        if K > 1:
            return ''.join(sorted(S))
            #then we can sort the string.  return in alphabetical order.
        elif K == 1:
            #then we can only rotate to find the best order.
            #can generate K lists and take the smallest one.
            for i in range(1, len(S)):
                minList = min(minList, S[i:] + S[:i])
                
        return ''.join(minList)
        """
        :type S: str
        :type K: int
        :rtype: str
        """
