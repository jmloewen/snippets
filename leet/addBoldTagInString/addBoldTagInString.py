#A sad 30% solution, adapted from Leetcode Approach #1.
class Solution:
    def addBoldTag(self, s, dict):
        boldLetters = [False] * len(s)
        for i in range(0, len(s)):
            for word in dict:
                pre = s[i:]    #Contains the end of the string.
                if pre.startswith(word):
                    boldLetters[i:i+len(word)] = [True] * len(word)
        ret = ""
        inTag = False
        for i in range(0, len(boldLetters)):
            if boldLetters[i]:
                if not inTag:
                    ret = ret + "<b>"
                    inTag = True
                ret = ret + s[i]
            else:
                if inTag:
                    ret = ret + "</b>"
                    inTag = False
                ret = ret + s[i]
        if inTag:
            return ret + "</b>"
        return ret
