#a 60% solution, for leetcode virtual contest 104
#combine all words in B to one word, then compare this dictionary against all words in A.  O(M + N)
from collections import defaultdict
from copy import copy
class Solution(object):
    def wordSubsets(self, A, B):
        #store all letters in all words.

        wdList = {}
        rvWords = []
        bDict = defaultdict(lambda:0)

        for word in A:
            wordDict = defaultdict(lambda:0)
            for ltr in word:
                wordDict[ltr] += 1
            wdList[word] = wordDict

        for word in B:
            wordDict = defaultdict(lambda:0)
            for ltr in word:
                wordDict[ltr] += 1

            for key in wordDict:
                bDict[key] = max(bDict[key], wordDict[key])

        for key in wdList:
            validWord = True
            tempDict = copy(bDict)
            for c in tempDict:
                if tempDict[c] > wdList[key][c]:
                    validWord = False
                    break
            if validWord:
                rvWords.append(key)
        return rvWords
