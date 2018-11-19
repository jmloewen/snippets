class Solution:
    def threeEqualParts(self, A):
        #This would seem to be a sliding window problem, where 'left' and 'right' denote the values containing the middle.
        #note that on the return value [i, j], i denotes the last character of the first partition.  j denotes the last character of the second partition.  This can be calculated after we do our sliding window, will require some off-by-one trial and error.

        #example:
        #10101 = [0, 3]
        #10101 -> 16 + 4 + 1 = 21.  gets split into 3 values of '1'.

        #Bit Shifting adapted from some dude in the discussion section.
        #This is an O(N) algorithm.

        left, right = -1, len(A)

        lp = mp = rp = 0

        for bit in A:
            #Shift left and
            mp = mp << 1
            mp = mp + bit
        print(mp)


        #left + 1 <= right.  If this is violated, then there is no space fo rthe centre partition and we have to return -1, -1.
        #left border to the right, right border left until either the constraint is violated or we find an equal partition.
        while left + 1 <= right:
            if lp == mp == rp:

                #Return our partition.  Corner case of all 0's would result in left and right being invalid values, so we need to change these to 0 and len(A) - 1.
                return [max(left, 0), min(right, len(A) - 1)]
            elif lp < rp:
                left += 1
                #if left < right, we need to increase the space that left has.
                lp = lp << 1
                lp = lp + A[left]

                if left + 1 <= right:
                    #m = (~(1 << (j-i-1))) & m
                    mp = (~(1 << (right - left - 1))) & mp


                    #middle = (-(1 << (right - left - 1)) - 1) & mp
                    between = right - left - 1  #get spaces between right and left.
                    shift = 1 << between        #throw a 1 at the maximal left spot.
                    shift = ~shift              #get the complement of this mask.  Mask it with itself to get the new value.  (comp = -x-1)
                    mp = shift & mp
            else:
                #rp <= lp.  move right to the left to make it bigger.
                right -= 1

                #Whats happening here?
                #The leftmost value of the right partition is moved one to the left.
                #If it's a 0, nothing happens here.  value doesnt increase.
                #If it's a 1, it's shifted to the left, and we then re-mask with the existing right partition to increase our value by some factor of 2 that I don't care to write out here.
                rp = rp | (A[right]) << (len(A) - 1 - right)

                #Rightshift MP, as our middle was just shrunk by one.
                mp = mp >> 1 #middle is decreasing on the right side, so we have to shift right its mask by 1.

                '''
                j -= 1
                r = r | (A[j] << (len(A)-1-j))
                m = m >> 1
                '''
                    #middle = (("1 lshifted (spaces between right and left) spaces, minus one.") *-1) -1, masked with middle.
            #cases:
            #lp == mp == rp
                #return with coords
            #lp < rp

            #else (left >= right or equal but != middle)
            #
        return [-1, -1]
