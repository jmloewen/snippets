class Solution:
    #same as other problem i did today.
    def lengthOfLongestSubstringTwoDistinct(self, s):

        if len(s) < 3:
            return len(s)

        chars = {}
        curMax = 2
        left = 0

        for i, ltr in enumerate(s):
            if chars.get(ltr):
                chars[ltr] += 1
            else:
                curMax = max(curMax, i-left)
                while len(chars) == 2:
                    chars[s[left]] -= 1
                    if chars[s[left]] == 0:
                        del chars[s[left]]
                    left += 1
                chars[ltr] = 1
        return max(curMax, i+1-left)
