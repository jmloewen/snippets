#A 99% solution.  Based off of the 100% LC solution, with some tweaks.
class Solution:
    def wordBreak(self, s, wordDict):
        if not s:
            return True
        l = len(s)

        dpTable = [False] * (l + 1)
        dpTable[0] = True
        wordSet = collections.defaultdict(set) #make a DD of sets.
        
        #add each word in the dictionary to a new set dictionary at its length value.
        for word in wordDict:
            wordSet[len(word)].add(word) #Add to set

        #For entire range of the word + 1...
        for i in range(1, l + 1):
            #Reminder that set.items() returns each Tuple, at each length.
            for j, words in wordSet.items():
                #set start of search to be the larger of 0 and the length of the largest found word.
                start = max(0, i-j)
                #If prev word is in, and the next segment is a value in wordSet, mark true and go next iter.
                if dpTable[start] and s[start:i] in words:
                    dpTable[i] = True
                    break
        return dpTable[-1]
