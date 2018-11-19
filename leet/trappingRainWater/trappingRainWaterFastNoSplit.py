class Solution:
    def addBoldTag(self, s, dict):
        #A faster and still simple solution adapted from Bar 2
        #How is this different than what I was doing before?  A 100% solution.
        length = len(s)
        boldLetters = [False] * length

        for word in dict:
            start = s.find(word)
            end = len(word)
            while start > -1:
                boldLetters[start:start+end] = [True] * len(word)
                start = s.find(word, start + 1)

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
