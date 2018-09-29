#Implement a method to preform basic string compression using the counts of prepeated characters. For example, string:
#aabcccaaa becomes a2b1c5a3.
#If the compressed string is longer than or equal to the length of the original string, return the original string.
#Assume the string only has upper and lowercase letters.
#Assuming that upper and lowercase letters are unique.

#Notes: This feels like another case of count and construct with a dictionary, an O(n) operation.
#There is no guarantee of a sorted string.
#Keep a monitor variable to determine if the new string is longer or shorter.
#Or just do a length comparison.
#Len is an O(1) operation.  So, if for any reason compress becomes larger than S, return S.
class Solution:
    def stringCompression(self, S):
        if not S or len(S) <= 2:
            return S
        cur = S[0]
        ctr = 1
        compress = ""
        for i in range(1, len(S)):
            if S[i] != cur:
                compress += str(cur) + str(ctr)
                if len(compress) >= len(S):
                    return S
                cur = S[i]
                ctr = 1
            else:
                ctr += 1
        compress += str(cur) + str(ctr)

        if len(compress) >= len(S):
            return S
        return compress

    #This didn't do what the question was asking - it counted the number of each letter in the entire string and printed them alphabetically.
    #What the question wants is the number of repeated adjacent characters.  Thankfully, this can be done in one pass.
    def notStringCompression(self, S):
        chars = defaultdict(lambda:0)
        for c in S:
            chars[c] += 1
        chars = sorted(chars.items())
        compress = ""
        for key in chars:
            compress += str(key[0])
            compress += str(key[1])
        if len(compress) >= len(S):
            return S
        return compress

def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.")
        print("Output: ", F, "Expected: ", expected)
        return False
    return True

s = Solution()

testSolution(s.stringCompression("aabcccccaaa"), "a2b1c5a3", 0)
testSolution(s.stringCompression("abcdefg"), "abcdefg", 1)
testSolution(s.stringCompression("aaab"), "aaab", 2)
testSolution(s.stringCompression("aaaab"), "a4b1", 3)
testSolution(s.stringCompression("aaabb"), "a3b2", 4)
testSolution(s.stringCompression("aaaabbb"), "a4b3", 5)
testSolution(s.stringCompression("abccccc"), "a1b1c5", 6)
testSolution(s.stringCompression(""), "", 7)
testSolution(s.stringCompression("a"), "a", 8)
testSolution(s.stringCompression("ab"), "ab", 9)
