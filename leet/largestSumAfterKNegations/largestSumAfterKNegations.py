#this is worded really poorly.
#We negate any K values in A and want to output the largest possible value.
#easy nlogn method: sort and negate values from the smallest number to the largest.
#faster method: values can only be between -100 and 100, we can easily take advantage of this.
#on re-read, we can choose the same value multiple times
#this means that:
    #if number of negative values > K, we flip largest K negative values
    #if the number of negative values < K we flip all negatives to positive.
        #Then, if the number of remaining K values is even, we are done.
        #If odd, we make the smallest magnitude value negative.
    
    #thats it.
    #ill do the easy sorted version instead
    
#was doing this wrong - misunderstood question.  "Replace value with negative value" not "subtract that value".  once this was fixed, finished.
class Solution(object):
    def largestSumAfterKNegations(self, A, K):
        
        A.sort()
        
        ret = 0
        
        for i in range(len(A)):
            if A[i] < 0 and K > 0:
                K -= 1
                A[i] *= -1
            else:
                break
        if K % 2 == 0:
            return sum(A)
        print(i, K)
        offset = 0
        if i > 0:
            offset = min(abs(A[i]), abs(A[i-1]))
        else:
            offset = A[0]
            
        return sum(A) - offset - offset
                         
                
                
        
        '''
        arr = [0] * 201
        
        for i in range(len(A)):
            arr[A[i] + 100] += 1
            
        i=0
        largestSum = 0
        while K > 0:
            if arr[i] > 0:
                K -= 1
                arr[i] -= 1
                largestSum += (i-100) * -1
                
                print("Added ", (i-100) * -1)
            else:
                i += 1
        
        while i <= 200:
            if arr[i] > 0:
                arr[i] -= 1
                largestSum += (i-100)
                print("Added ", (i-100))
            else:
                i += 1
        return largestSum
                
        '''
        
        
        """
        :type A: List[int]
        :type K: int
        :rtype: int
        """
        