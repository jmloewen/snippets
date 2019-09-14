#could be better
from collections import defaultdict
class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        dd = defaultdict(lambda:0)
        for i in range(len(arr1)):
            dd[arr1[i]] += 1
        out = []
        for i in range(len(arr2)):
            while dd[arr2[i]] > 0:
                out.append(arr2[i])
                dd[arr2[i]] -= 1
        
        for i in range(0, 1001):
            while dd[i] > 0:
                out.append(i)
                dd[i] -= 1
        return out
                
        