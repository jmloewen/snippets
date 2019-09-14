#slow and big and bad
from collections import defaultdict
class Solution:
    def commonChars(self, A: List[str]) -> List[str]:
        ltrDict = defaultdict(lambda: 0)
        ret = []
        if not A:
            return []
        for i in range(len(A[0])):
            ltrDict[A[0][i]] += 1
            
        for i in range(1, len(A)):
            curDict = defaultdict(lambda: 0)
            for j in range(len(A[i])):
                curDict[A[i][j]] += 1
            
            for key in ltrDict:
                if curDict[key] > 0:
                    ltrDict[key] = min(ltrDict[key], curDict[key])
                elif curDict[key] == 0:
                    ltrDict[key] = 0
        
        for key in ltrDict:
            while ltrDict[key] > 0:
                ret.append(key)
                ltrDict[key] -= 1
        return ret
                