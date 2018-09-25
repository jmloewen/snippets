#An unoptimized minimumWindowSubstring that is somehow a 95% solution.
class Solution:
    def minWindow(self, s, t):
        from collections import defaultdict
        #Time for sliding window
        #A simple sliding window - monitor left and right, scan each intermediary value to find whatever middle value we need.
        #left and right edges of windows will include left and right edges of T.  need to find intermediary values within substring of S, in no particular order.
        #Find t within s.
        #Find start of t.
        keysToFill = len(set(t))
        charDict = defaultdict(lambda: 0)
        winDict = defaultdict(lambda: 0)
        ans = ""

        #Fill our charDict with characters that are in t.
        for c in t:
            charDict[c] += 1

        left = right = 0

        #Move right edge to the right.  Once conditions are fulfilled by moving to the right, move left rightwards until the next movement would make the condition no longer fulfilled.
        while right < len(s):
            cur = s[right]
            if charDict[cur] > 0:#If this character is in the charDict, stack it up
                winDict[cur] += 1
                #If the amount of this character in cD == it in wD, check off a requirement as filled.
                if winDict[cur] == charDict[cur]:
                    keysToFill -= 1

            if keysToFill == 0:
                #We've found an answer.  Move left to the right until it's in the smallest possible valid state.
                while left < right:
                    curLeft = s[left]
                    #If removing this value would not reduce us to an invalid state, do it.
                    if winDict[curLeft] > charDict[curLeft] and charDict[curLeft] > 0:
                        winDict[curLeft] -= 1
                    elif winDict[curLeft] == charDict[curLeft] and charDict[curLeft] >= 1:
                        break
                    left += 1

                if not ans or right - left < len(ans):
                    ans = s[left:right + 1]

                if len(ans) == len(t):
                    return ans

                #Adjust left rightwards to continue the check.
                winDict[s[left]] -= 1
                keysToFill += 1
                left += 1
            right += 1
        return ans
