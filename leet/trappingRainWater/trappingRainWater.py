class Solution:
    def trap(self, height):
        #Based on Solution #2 from Leetcode Solutions page.  A 68% solution.

        if len(height) <= 2:
            return 0

        vol=0
        size=len(height)
        maxL, maxR = [0] * size, [0] * size
        maxL[0], maxR[-1] = height[0], height[-1]

        for i in range(1, size):
            maxL[i] = max(height[i], maxL[i-1])

        for i in range(size-2, -1, -1):
            maxR[i] = max(height[i], maxR[i+1])

        for i in range(1, size-1):
            vol += min(maxL[i], maxR[i]) - height[i]

        return vol
