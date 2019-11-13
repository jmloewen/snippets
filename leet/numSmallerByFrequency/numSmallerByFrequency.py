class Solution:
    #a bad 44% speed 100% space solution.
    def getFreqOfSmallestChar(self, word):
        
        ltr = min(word)
        
        #given a word, return the appearance frequency of its smallest character.
        ctr = 0
        
        for i in range(len(word)):
            if word[i] == ltr:
                ctr += 1
        return ctr
    
    def numSmallerByFrequency(self, queries: List[str], words: List[str]) -> List[int]:
        
        counts = []
        for i in range(len(words)):
            words[i] = self.getFreqOfSmallestChar(words[i])
            
        words = sorted(words, reverse=True)
            
        for i in range(len(queries)):
            queries[i] = self.getFreqOfSmallestChar(queries[i])
            
            ctr = 0
            for j in range(len(words)):
                if queries[i] < words[j]:
                    ctr += 1
                else:
                    break
            counts.append(ctr)
        return counts