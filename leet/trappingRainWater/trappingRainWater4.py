class Solution:
    def trap(self, height):
        #Approach 4, only as fast as Approach 2, but is more space efficient.
        if len(height) <= 2:
            return 0

        vol=0
        size=len(height)
        pL, pR = 0, size-1
        maxL = maxR = 0

        while pL < pR:
            if height[pL] < height[pR]:
                if height[pL] >= maxL:
                    maxL = height[pL]
                else:
                    vol += maxL - height[pL]
                pL += 1
            else:
                if height[pR] >= maxR:
                    maxR = height[pR]
                else:
                    vol += maxR - height[pR]
                pR -= 1
        return vol
        
