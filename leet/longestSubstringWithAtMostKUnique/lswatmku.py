class Solution:
    #dict-based general solution.
    def lengthOfLongestSubstringKDistinct(self, s, k):

        if k == 0:
            return 0
        elif len(s) < k+1:
            return len(s)

        chars = {}
        curMax = 0
        left = 0

        for i, ltr in enumerate(s):
            if chars.get(ltr):
                chars[ltr] += 1
            else:
                curMax = max(curMax, i-left)
                while len(chars) == k:
                    chars[s[left]] -= 1
                    if chars[s[left]] == 0:
                        del chars[s[left]]
                    left += 1
                chars[ltr] = 1

        return max(curMax, i+1-left)
