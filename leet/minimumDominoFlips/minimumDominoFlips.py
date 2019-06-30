#this is slow and bad, but it clears.

from collections import defaultdict
class Solution:
    def minDominoRotations(self, A: List[int], B: List[int]) -> int:
        #if this is possible, there is some number that exists on all top values OR all bottom values
        #there are three cases and one sub-case.
        #1. there is some value, predominantly on top, that requires flipping bottom values up to the top to produce the minimum number of flips.
        #2. there is some value predominantly on bottom that requires flipping top values down to the bottom to produce minimum number of flips.
        #1b/2b - these values are equal - neither is predominant.
        #3. there is no such case that will produce a row of all equal values.
        
        #1. find all unique values.  if there are more than 2, we can determine which the invalid value is if it occurs in less than N dominoes.
        #2. for values that occur in N unique dominoes, calculate the minimum cost of whether we should flip top or bottom.
        #3. if there are two such values, compare the minimums.
        #this should be O(4N) at most.
        
        valDict = defaultdict(lambda:0)
        for i in range(len(A)):
            if A[i] != B[i]:
                valDict[A[i]] += 1
                valDict[B[i]] += 1
            else:
                valDict[A[i]] += 1
                
        candidates = []
        for key in valDict.keys():
            if valDict[key] == len(A):
                candidates.append(key)
        if not candidates:
            return -1
                
        minFlip = len(A)
        
        for c in range(len(candidates)):
            minFlip = min(minFlip, (len(A) - max(A.count(candidates[c]), B.count(candidates[c]))))
            
        return minFlip
                    