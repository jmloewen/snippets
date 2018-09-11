class Solution(object):
    def kEmptySlots(self, flowers, k):
        #1. Populate blooming days - Blooming days are values of i, on days of flowers[i].  Remove the 1-index
        #2. Create a sliding window checker.
        #3. Compare the values within the window to the Left and Right edges.  
            #If there is a value interior less than either the Left or the Right edge of the window, this window is not vialbe and we should shift it to the right by one.
            #If the value is equal to the right side of the window, we've cleared the entire window of nonviable entries, and should record the result.
            #Else, the current value has been validated, and we move to check the next value in the interior of the window.
        
        bloom = [0] * len(flowers)
        
        for i in xrange(len(bloom)):
            bloom[flowers[i] - 1] = i
            
        #Sliding window requres L, R, and i.  Also need to store result.
        L, R, i, day = 0, k + 1, 0, len(flowers)
            
        #Go left to right, check interior for validity of window.
        while R < len(bloom):
            if bloom[i] < bloom[L] or bloom[i] <= bloom[R]:
                #If i is less than either L or R, the window is invalid and has to shift.
                #In the base case of i=L, this is OK, since L will shift to current i, which is 0.
                #In the case of i == R, since values are unique, this means we've hit the end of the window.
                if i == R:
                    day = min(day, max(bloom[L], bloom[R]))
                L, R = i, k + 1 + i
            i += 1
        
        if day < len(bloom):
            return day + 1
        return -1