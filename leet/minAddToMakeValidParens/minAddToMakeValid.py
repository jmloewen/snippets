#Simultaneously a 100% and a 9% solution.
class Solution(object):
    def minAddToMakeValid(self, S):#can probably just count number of lefts and number of rights, and then subtract the difference.
        leftBraces = 0
        totalNeeded = 0

        for c in S:
            if c == "(":
                leftBraces += 1
            else:
                if leftBraces > 0:
                    leftBraces -= 1
                else:
                    totalNeeded += 1

        return totalNeeded + leftBraces
