#simple and slow version of this problem
from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        wordDict = defaultdict(lambda: [])
        
        #sort word and index it
        #relatively slow but it's an easy solution
        
        for word in strs:
            wordDict[''.join(sorted(word))].append(word)
        return list(wordDict.values())