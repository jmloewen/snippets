#Thoughts?
#Make a dict.  Store everything in individual Dict entries.  If value is in dict, return F.
#O(s) time, O(s) storage.

#String is not sorted.
#If it were sorted on ASCII value, could simply check to see if adjacent values were equal.  Would be O(s) time, O(1) space.

#For unsorted, dict approach seems to be the right one, even though it's the way that I've always done this problem.
class Solution():
    def isUnique(self, S):
        ltrDict = {}

        for ltr in S:
            if ltrDict.get(ltr):
                return False
            ltrDict[ltr] = 1
        return True

    #No additional data structures - does this mean no Arrays as well?  Only self comparison?
    #Could sort and search - NlogN
    def isUniqueNoExtra(self, S):
        sortS = ''.join(sorted(S))
        prev = "ab"
        for ltr in sortS:
            if ltr == prev:
                return False
            prev = ltr
        return True

def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.")
        return False
    return True

#Examples:
        #S="12345678901" F
        #S="11234567890" F
        #S="1234567890a" T
        #S="" T
        #S="a" T
        #S="aA" Probably T.  Depends on what the question wants.

s = Solution()

testSolution(s.isUnique("12345678901"), False, 0)
testSolution(s.isUnique("11234567890"), False, 1)
testSolution(s.isUnique("1234567890a"), True, 2)
testSolution(s.isUnique(""), True, 3)
testSolution(s.isUnique("a"), True, 4)
testSolution(s.isUnique("aA"), True, 5)

testSolution(s.isUniqueNoExtra("12345678901"), False, 6)
testSolution(s.isUniqueNoExtra("11234567890"), False, 7)
testSolution(s.isUniqueNoExtra("1234567890a"), True, 8)
testSolution(s.isUniqueNoExtra(""), True, 9)
testSolution(s.isUniqueNoExtra("a"), True, 10)
testSolution(s.isUniqueNoExtra("aA"), True, 11)
