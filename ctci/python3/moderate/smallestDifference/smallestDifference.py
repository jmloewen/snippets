def smallestPosDifference(A, B):
    #Given two arrays, compute the pair of values with the smallest nonnegative difference.
    #Version for positive difference.

    if not A or not B:
        return None

    A.sort()
    B.sort()
    a = 0
    b = 0

    minDiff = (A[-1] - B[b])
    if minDiff < 0:
        return None

    minVals = (0, 0)
    while a < len(A) and b < len(B):

        if  0 < A[a] - B[b] <= minDiff:
            minDiff = abs(A[a] - B[b])
            minVals = (A[a], B[b])

        if A[a] < B[b]:
            a += 1
        else:
            b += 1

    return minVals

def smallestDifference(A, B):
    #Given two arrays, compute the pair of values with the smallest nonnegative difference.
    #Version for absolute difference.

    if not A or not B:
        return None

    A.sort()
    B.sort()
    a = 0
    b = 0

    minDiff = abs(A[a] - B[b])

    minVals = (0, 0)
    while a < len(A) and b < len(B):

        if  abs(A[a] - B[b]) <= minDiff:
            minDiff = abs(A[a] - B[b])
            minVals = (A[a], B[b])

        if A[a] < B[b]:
            a += 1
        else:
            b += 1

    return minVals


num = smallestPosDifference([1, 2, 11, 15],[4, 12, 19, 23, 127, 235])
print(num)
            #A[a] > A[a-1].
            #A[a] - B[b] > A[a-1] - B[b]
            #This means that A[a] has gotten further away from this same value of B[b] than A[a-1] was.  We need to increase b.
