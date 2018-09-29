#palindromePermutation
#Given a string, write a function to check if it is a permutation of a palindrome.
#(a palindrome is a word or phrase that is the same forwards as backwards.
#Palindrome does not need to be composed of real words.
#An O(N) algorithm.  There is likely a more space efficient way to do it than this, by using
#A static 26-space array instead of a DD.
from collections import defaultdict
class Solution:
    def palindromePermutation(self, S):
        #Can simply do count of # of each character.
        chars = defaultdict(lambda:0)
        numOddValues = 0
        #Keep a counter of the number of odd values we have in the dict as we build it.
        for ltr in S:
            if ltr.isalpha():
                chars[ltr.upper()] += 1
                if chars[ltr.upper()] % 2 == 1:
                    numOddValues += 1
                else:
                    numOddValues -= 1
            #Nothing  is allowed in a palindrome except letters and spaces.
            elif ltr != " ":
                return False

        #If this value is 1, we can put it in the middle.  Rest of values are even, and can be arranged around the centre, creating a palindrome.
        if numOddValues == 1:
            if sum(chars.values()) % 2 == 0:
                return False
        #If it's greater than 1, there is no way to make a palindrome of this.
        elif numOddValues > 1:
            return False
        #If there are an even number of all characters in the sentence, we can always make a palindrome.
        return True

def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.")
        print("Output: ", F, "Expected: ", expected)
        return False
    return True

s = Solution()

testSolution(s.palindromePermutation("taco cat"), True, 0)
testSolution(s.palindromePermutation("atco cta"), True, 1)
testSolution(s.palindromePermutation("atcocta"), True, 2)
testSolution(s.palindromePermutation("atco    cta"), True, 3)
testSolution(s.palindromePermutation("ctaatco"), True, 4)
testSolution(s.palindromePermutation(" "), True, 5)
testSolution(s.palindromePermutation(""), True, 6)
testSolution(s.palindromePermutation("a"), True, 7)
testSolution(s.palindromePermutation("aa"), True, 8)
testSolution(s.palindromePermutation("aaa"), True, 9)
testSolution(s.palindromePermutation("aaaa"), True, 10)
testSolution(s.palindromePermutation("aaaaa"), True, 11)
testSolution(s.palindromePermutation("aaaba"), True, 12)
testSolution(s.palindromePermutation("aaaaba"), False, 13)
testSolution(s.palindromePermutation("aaa aba"), False, 14)
testSolution(s.palindromePermutation("aaaa2a"), False, 15)
testSolution(s.palindromePermutation("aaa2a"), False, 16)
testSolution(s.palindromePermutation("TactCoa"), True, 17)
