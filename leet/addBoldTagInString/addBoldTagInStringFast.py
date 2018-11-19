#A 100% solution.  This is how I was trying to do it the last few days, but I must have had some weird bug.
class Solution:
    def addBoldTag(self, s, dict):
        length = len(s)
        boldLetters = [False] * length

        for word in dict:
            start = s.find(word)
            size = len(word)

            while start > -1:
                boldLetters[start:start+size] = [True] * len(word)
                start = s.find(word, start + 1)

        ret = ""
        inTag = False
        i=0
        while i < length:
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
            i += 1
        if inTag:
            return ret + "</b>"
        return ret
