class Solution: #an 80% solution
    def maxArea(self, height):

        if len(height) < 2:
            return 0

        left = 0
        right = len(height) - 1
        curMax = min(height[-1], height[0]) * (len(height) - 1)
        while left < right:
            curMax = max(curMax, min(height[left], height[right]) * (right-left))

            if height[right] > height[left]:
                left += 1
            else:
                right -= 1
        return curMax
