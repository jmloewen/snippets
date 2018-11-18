#Given an array, find some 4sum and return the values that compose it.  duplicate values are allowed, but duplicate indexes are not

#return 4 values in A that sum up to T, if they exist.
def arrayQuadrupletNaive(A, T):
    #Any values that add to T will have to include two sums of 2 values, or one sum of 3 values added to a pass of 1-values.

    #3Sum for a specific target is an O(N^2) algorithm.  N^2 comparisons to get all 2sums, and a final pass of N to look for some complement of those 2sums.
    #Generating 3sum for all values here will thus cost an additional N passes - an O(N^3 algorithm).
    sumDict = {}
    comp = [None] * len(A)
    for i in range(len(A) - 2):
        for j in range(i+1, len(A) - 1):
            for k in range(j+1, len(A)):
                curSum = A[i] + A[j] + A[k]
                if sumDict.get(curSum):
                    sumDict[curSum].append([i, j, k])
                else:
                    sumDict[curSum] = [[i, j, k]]

    for i in range(len(A)):
        #If this sum is in the dictionary, check if this value was part of this sum.
        if sumDict.get(T - A[i]):
            #If this index isn't in sumDict, then we have 4 unique values.
            for l in range(len(sumDict[T-A[i]])):
                if i not in sumDict[T-A[i]][l]:
                    ret = sumDict[T-A[i]][l]
                    ret.insert(bisect.bisect_left(ret, i), i)

                    for r in range(len(ret)):
                        ret[r] = A[ret[r]]
                    return ret
    return False


t = [1,2,3,4,1,1,1,1,1,50,31,23,12,5,6,3,54,2,2,3,4,2,5,6,7,8,9,10,11,12,13,14,15]
print(arrayQuadrupletNaive(t, 50))
