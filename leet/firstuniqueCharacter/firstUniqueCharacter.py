from collections import defaultdict
class Solution:
    def firstUniqChar(self, s):
        #optimal scan through all english letters, find the lowest occurring one.
        #in theory this is better, but for a more general case of all characters.
        ltrs = defaultdict(lambda:0)
        for i in range(len(s)):
            ltrs[s[i]] += 1

        for i in range(len(s)):
            if ltrs[s[i]] == 1:
                return i
        return -1
