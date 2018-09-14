class Solution:
    def trap(self, height):
        #The 100% Leetcode approach, modified to work without splitting the list.  a 99.83% solution.
        if len(height) <= 2:
            return 0
        #Go from left to the max value, then from right to the max value, adding where appropriate.
        maxIndex = height.index(max(height))
        vol = 0
        boundary = height[0]

        for h in range(1, maxIndex):
            if height[h] > boundary:
                boundary = height[h]
            else:
                vol += boundary - height[h]
        boundary = height[-1]

        for h in range(len(height)-2, maxIndex, -1):
            if height[h] > boundary:
                boundary = height[h]
            else:
                vol += boundary - height[h]
        return vol
