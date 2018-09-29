#Write a method to replace all spaces in a string with '%20'.  May assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.
#ex: Input -  "Mr John Smith    ", 13
#    Output - "Mr%20John%20Smith"
#See: There are enough spaces allocated to the end of Input so that we may later replace '%20' on each one.
class Solution:
    def urlIfy(self, S, l):

        if S and S[-1] != " ":#If there is no trailing Space, there is nothing to replace.
            return S
        #Trim spaces.
        return (S.strip().replace(" ", "%20"))

def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.")
        print("Output: ", F, "Expected: ", expected)
        return False
    return True

s = Solution()

testSolution(s.urlIfy("Mr John Smith    ", 13), "Mr%20John%20Smith", 0)
testSolution(s.urlIfy("Mr JohnSmith    ", 12), "Mr%20JohnSmith", 1)
testSolution(s.urlIfy("MrJohnSmith", 11), "MrJohnSmith", 2)
testSolution(s.urlIfy("", 0), "", 3)
testSolution(s.urlIfy("e e  ", 3), "e%20e", 4)
        
