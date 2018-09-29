#AKA  OneEditDistance.  Also includes Zero Edit Distance.
#4 options to be 1 away.
#1. S1 == S2
#2 / 3. The smaller of S1 and S2, Plus 1 character, is the larger of S1 or S2 (Insertion/deletion).
#4. One character was edited between the two.
class Solution:
    def oneAway(self, S1, S2):
        l, s = S1, S2
        if S1==S2:
            return True
        elif S1 is None or S2 is None:
            if len(S1) + len(S2) <= 1:
                return True
            return False
        elif abs(len(S1) - len(S2)) > 1:
            return False
        elif len(S1) < len(S2):
            l = S2
            s = S1
        #If they are of equal length or S1 is larger, l, s = S1, S2.

        for i in range(0, len(s)):
            if s[i] == l[i]:
                continue
            else:
                #Case 2/3.  Length is different.
                #print("S[i:], L[i+1]:", s[i:], l[i+1:])
                if s[i:] == l[i+1:]:
                    return True
                #Case 4.
                elif s[i+1:] == l[i+1:]:
                    return True
                return False
        return True

def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.")
        print("Output: ", F, "Expected: ", expected)
        return False
    return True

s = Solution()

testSolution(s.oneAway("", "a"), True, 0)
testSolution(s.oneAway("a", "a"), True, 1)
testSolution(s.oneAway("a", "ab"), True, 2)
testSolution(s.oneAway("a", "abc"), False, 3)
testSolution(s.oneAway("a", "abcd"), False, 4)
testSolution(s.oneAway("a", "abcd"), False, 5)
#CTCI cases:
testSolution(s.oneAway("pale", "ple"), True, 6)
testSolution(s.oneAway("pales", "pale"), True, 7)
testSolution(s.oneAway("pale", "pales"), True, 8)
testSolution(s.oneAway("pale", "bale"), True, 9)
testSolution(s.oneAway("pale", "bake"), False, 10)
testSolution(s.oneAway("", ""), True, 11)
testSolution(s.oneAway("a", "b"), True, 12)
testSolution(s.oneAway(" ", ""), True, 13)
testSolution(s.oneAway("", " "), True, 14)
testSolution(s.oneAway(" ", "  "), True, 15)
testSolution(s.oneAway("b", "a"), True, 16)
