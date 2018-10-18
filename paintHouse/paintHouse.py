class Solution:
    def minCost(self, costs):
        #only 3 different colors
        #red, green and blue.
        #there are n houses, 3 costs for each
        #If some house != 0 or len(houses)-1 is a color, its neighbors must be one of the other two colors.
        #so, our recurrence should minimize the sum of (left, middle, right).
        #
        numHouses = len(costs)

        #totals=  r,g,b
        totals = [0,0,0]
        #if we pick a house a certain color, we can take the min of values of its neighbors
        #store these values in a 3 item array and return the smallest value.

        for red, blue, green in costs:
            totals[0], totals[1], totals[2] = red + min(totals[1], totals[2]), blue + min(totals[0], totals[2]), green + min(totals[0], totals[1])
        return min(totals)
