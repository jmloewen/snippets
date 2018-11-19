#First done in a google doc.  This ignores extra functions in favour of just popping off the ends as needed.
class Solution(object):
    def spiralOrder(self, A):
        if not A or not A[0]:
            return []

        #going in clockwise order, I’m guessing.
        #The last time I did this, I removed the values as I went.

        #Lets do that again, but smarter this time.

        spiralList = []

        while A and A[0]:
            #Want to move clockwise, then down, then counterclockwise, then up.
            #Instead of doing 4 directions, why not just do it all in one cycle?
            while len(A[0]) > 0:
                spiralList.append(A[0].pop(0))
            #I can’t recall what happens to a list when the last value is popped in python.  I assume that it disappears, but I can’t recall if this is actually the case.  This if statement here is a safeguard in case I’m wrong about it disappearing.

            if A and len(A[0]) == 0:
                A.pop(0)


            #Now need the ends of the lists.
            for i in range(len(A)):
                spiralList.append(A[i].pop(-1))

            if not A or len(A[-1]) == 0:
                break

            #Last list, going right to left.
            if A and A[-1] and A[-1] > 0:
                while len(A[-1]) > 0:
                    spiralList.append(A[-1].pop(-1))

            if A and len(A[-1]) == 0:
                A.pop(-1)
                

            #Now going upwards.

            if A and A[-1] and len(A[-1]) == 0:
                A.pop(-1)
            for i in range(len(A)-1, -1, -1):
                spiralList.append(A[i].pop(0))

            #We have now completed a full cycle, plus A[0][0] of the second iteration.

        return spiralList
