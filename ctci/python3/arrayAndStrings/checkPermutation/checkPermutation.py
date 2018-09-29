#Sum of ordinal values will not work - four unique characters could have an ordinal sum of the same value, and be a false positive.
#Modify the s1 dictionary based on both values.  If they're permutations of each other, we should have values of 0 throughout the array.
#An O(3N) algorithm.  Is there a shorter way?
#Creating sets would not work, as case of AABC vs ABBC would return True, are False.

from collections import defaultdict
class Solution():
    def checkPermutation(self, S1, S2):
        s1Dict = defaultdict(lambda:0)
        #If length isn't the same, s2 isn't a perm of s1.
        if len(S1) != len(S2):
            return False

        for i in range(len(S1)):
            s1Dict[S1[i]] += 1
            s1Dict[S2[i]] -= 1

        for val in s1Dict.values():
            if val != 0:
                return False
        return True

def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.")
        return False
    return True

s = Solution()

testSolution(s.checkPermutation("abcd", "dcba"), True, 0)
testSolution(s.checkPermutation("abcd", "dcbaa"), False, 1)
testSolution(s.checkPermutation("abcd", "dcb"), False, 2)
testSolution(s.checkPermutation("", ""), True, 3)
testSolution(s.checkPermutation("", "a"), False, 4)
testSolution(s.checkPermutation("a", ""), False, 5)
testSolution(s.checkPermutation("a", "a"), True, 6)
testSolution(s.checkPermutation("aabc", "abbc"), False, 7)
testSolution(s.checkPermutation("aAbc", "aabc"), False, 8)
