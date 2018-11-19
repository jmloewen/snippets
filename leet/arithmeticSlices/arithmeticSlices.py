#Did this question on whiteboard, successfully!
#Needs optimization.
class Solution(object):
    def doMath(self, patternLength):
        return (patternLength * (patternLength - 1)) / 2

    def numberOfArithmeticSlices(self, A):

        if len(A) <= 2:
            return 0

        total, cur, prev = 0, A[2] - A[1], A[1] - A[0]
        curLen = 1
        if cur == prev:
            curLen = 2
        else:
            prev = cur


        for i in range(3, len(A)):
            cur = A[i] - A[i-1]

            if cur == prev:
                curLen += 1
            else:
                if curLen >= 2:
                    total += self.doMath(curLen)
                curLen = 1
                prev = cur

        if curLen >= 2:
            total += self.doMath(curLen)
        return total
