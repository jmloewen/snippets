#AKA findUnsortedSubarray in leetcode. 97%, but suboptimal. 
class Solution(object):
    def subSort(self, A):
        maxIndex = -1
        minIndex = len(A)
        minSearched = None
        sortedA = [A[0]]

        for i in range(1, len(A)):
            #If this value is in proper order, append the value to the sorted list.
            if A[i] >= sortedA[-1]:
                sortedA.append(A[i])
                #After we search once, we never have to insert more values.
                #This is because we will only ever find values SMALLER than what we previously found - so the index to mark as minimum has to be in sortedA already.
            #This value is not in order.
            elif A[i] < sortedA[-1]:
                #If we've not previously done a binary search
                if minSearched is None:
                    minIndex = bisect.bisect_right(sortedA, A[i])
                    minSearched = A[i]
                    maxIndex = i
                #If we have previously done a binary search
                else:
                    #If the previous value we searched is greater than this value, we have to do another binary search of sortedA.
                    if A[i] < minSearched:
                        #minIndex = sortedA.binarySearch(A[i])
                        minIndex = bisect.bisect_right(sortedA[:minIndex], A[i])
                        minSearched = A[i]
                        maxIndex = i
                        #We have to find the index where we would insert this value.  That index becomes our new minimum index.
                        #we do NOT insert this value - we just find the spot where we would insert this value.

                        #binary search producing the index to insert this value.
                        #logN time.
                        #binarySearch(sortedA)
                        pass
                    else:
                        #We don't have to search for this value, as we've already searched for a lower value, and thus produced a lower index than we can ever find with a binary search right now.
                        #We do have to update the max index though.
                        maxIndex = i
        if maxIndex == -1:
            return 0
        return maxIndex - minIndex + 1
