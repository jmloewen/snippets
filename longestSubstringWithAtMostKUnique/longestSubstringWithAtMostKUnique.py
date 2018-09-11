from collections import defaultdict

class Solution(object):
    def lengthOfLongestSubstringKDistinct(self, s, k):
        #at most k distinct characters - if k is 1, we want to find only 'aa' or 'bb', etc.
        #a localMax/curMax problem?
        #a sliding window problem.
        #Window starts at the left hand side, we will stretch it right as is appropriate.
        """
        :type s: str
        :type k: int
        :rtype: int
        """
        
        i = 0
        curLetters = defaultdict(lambda:0)
        
        while len(curLetters.keys()) < k and i < len(s):
            curLetters[s[i]] += 1
            i += 1
            
        if i == len(s):
            return i
            
        #We're now at a Right position i s.t. adding a letter would potentially cause us to shed a leftmost letter.
        curMax = i
        localMax = i
        L=0
        
        while i < len(s):
            #if this letter is already in the dict, extend our window rightwards.
            while i < len(s) and curLetters[s[i]] > 0:
                curLetters[s[i]] += 1
                i += 1
                localMax += 1
                curMax = max(curMax, localMax)
            
            if i < len(s):
                curLetters[s[i]] += 1
                i += 1
                localMax += 1
            
                #We now either have reached the end, or have reached a letter not in the dict on the Right.

                #Must move the left window edge to the right to accommodate.

                while len(curLetters.keys()) > k:
                    if curLetters[s[L]] > 1:
                        curLetters[s[L]] -= 1
                    else:
                        del curLetters[s[L]]
                    localMax -= 1
                    L += 1
            
        return curMax
                    