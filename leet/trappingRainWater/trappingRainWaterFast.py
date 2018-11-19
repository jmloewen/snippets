#A 99% solution - the same concept of a 100% solution, but without flipping the second partition around, instead just iterating down from the topself.
class Solution:
    def trap(self, height):
        #The 100% Leetcode approach, modified to work without reversing R.
        if len(height) <= 2:
            return 0

        maxIndex = height.index(max(height))

        L = height[1:maxIndex+1]
        R = height[maxIndex:]

        vol = 0

        boundary = height[0]

        for h in L:
            if h > boundary:
                boundary = h
            else:
                vol += boundary - h
        boundary = height[-1]

        for h in range(len(R)-1, -1, -1):
            if R[h] > boundary:
                boundary = R[h]
            else:
                vol += boundary - R[h]
        return vol
