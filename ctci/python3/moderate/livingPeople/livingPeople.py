#class Solution:
#Given a list of people with their birth and death years, implement a method to compute the year with the most number of people alive.
#May assume that all people were born between 1900 and 2000, inclusive.
#Ex:  person born in 1908 and dies in 1909, counts for both 1908 and 1909.

#Increment / Decrement, one pass, without sort.  O(Ranges + People)
def livingPeopleRP(A):
    minRange = 1900
    years = [0] * 102
    curMax = 0
    curAlive = 0
    maxIndex = -1

    for (b, d) in A:
        years[b-minRange] += 1
        years[1 + d - minRange] -= 1

    for y in range(len(years) - 1):
        curAlive += years[y]

        if curMax < curAlive:
            curMax = curAlive
            maxIndex = y
    return maxIndex + minRange

def livingPeopleBF(A):
    #normalize years down to 0-100
    minRange = 1900
    years = [0] * 101
    curMax = 0
    maxIndex = -1

    for (b, d) in A:
        bth, dth = b - minRange, d - minRange

        for y in range(bth, dth + 1):
            years[y] += 1

            if years[y] > curMax:
                curMax = years[y]
                maxIndex = y

    return maxIndex + minRange

#testArr = [(1900, 2000), (1909, 1910), (1950, 1980), (1990, 1999), (1999, 2000), (1900, 1909), (1900, 1919), (1980, 1989), (1970, 1976), (1980, 1980), (1954, 1986), (1984, 1999), (1936, 1954)]
