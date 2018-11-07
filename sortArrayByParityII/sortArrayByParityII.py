#a bad preformance on an easy question
class Solution(object):
    def sortArrayByParityII(self, A):

        badEvens = []
        badOdds = []
        #For each value A[i]:
        #Is value at position 0 even? If so, continue.
            #Else, it is Odd.  swap it with the first out of place Even value.  There must be one.

        #for each value of A[i]:
            #If we have found a out of place even / odd, and there is no previously found out of place odd / even, store in associated list.
            #if there is an associated out of place even / odd when we find an out of place even / odd, swap the values in these positions and remove them from their associated lists.
        #This is O(N).

        for i in range(len(A)):
            #odd value in an even slot.
            if i%2 == 0 and A[i] % 2 != 0:
                if badEvens:
                    swap = badEvens.pop(0)
                    A[i], A[swap] = A[swap], A[i]
                else:
                    badOdds.append(i)

            #Even value in an odd slot.
            elif i%2 == 1 and A[i] % 2 == 0:
                if badOdds:
                    swap = badOdds.pop(0)
                    A[i], A[swap] = A[swap], A[i]
                else:
                    badEvens.append(i)
        return A
