#"Assume you have a method issubstring which checks if one word is a substring of another.
#given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubtring"
#Ex: "waterbottle" is a rotation of "erbottlewat"
class Solution:
    def isSubstring(self, S1, S2):
        #Checks if S2 is a substring of S1.
        return S2 in S1
    def stringRotation(self, S1, S2):
        #s2 can only be a rotation of s1 if it is a subset.  Test this first.
        if len(S1) != len(S2):
            return False
        return self.isSubstring(S1 + S1, S2)

def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.")
        print("Output: ", F, "Expected: ", expected)
        return False
    return True

s = Solution()
testSolution(s.stringRotation("abc", "abc"), True, 0)
testSolution(s.stringRotation("abcabc", "abc"), False, 1)
testSolution(s.stringRotation("abd", "abc"), False, 2)
testSolution(s.stringRotation("rotation", "otationr"), True, 3)
testSolution(s.stringRotation("", "otationr"), False, 4)
testSolution(s.stringRotation("", ""), True, 5)
testSolution(s.stringRotation("", "a"), False, 6)
testSolution(s.stringRotation("a", ""), False, 7)
testSolution(s.stringRotation("a", "b"), False, 8)
testSolution(s.stringRotation("aaaaa", "aaaaa"), True, 9)
testSolution(s.stringRotation("aabaa", "baaaa"), True, 10)
testSolution(s.stringRotation("baaaa", "aabaa"), True, 11)
