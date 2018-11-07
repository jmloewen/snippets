#slow, general approach for this problem
from collections import defaultdict
class Solution(object):
    def hasGroupsSizeX(self, deck):
        countVals = defaultdict(lambda:0)

        for c in deck:
            countVals[c] += 1

        if len(countVals) == 1 and countVals[deck[0]] == 2:
            return True

        for i in range(2, 1 + len(deck)/2):
            canSplit = True

            for val in countVals.values():
                if val % i != 0:
                    canSplit = False
                    break

            if canSplit:
                return True

        return False

        """
        :type deck: List[int]
        :rtype: bool
        """
        
