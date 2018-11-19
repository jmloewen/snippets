#a badly worded question, for leetcode contest 111
#question is asking us how many character columns
    #(where each word is the same length, and a column is the kth character of that column)
#are out of order
#that's the entire question.  it's very simple.

class Solution(object):
    def minDeletionSize(self, A):
        #am i comparing each column value c to each other column value c to see if it is alphabetic?   This seems to be the only way this question makes sense.
        #what about 'aa'? is this alphabetic?  Is this acceptable?
        #Notice says values must be in "Non Decreasing Sorted Order", implying that we can increase, or "not decrease" - consecutive same values are OK according to the notice.
        numDeletions = 0
        #Iterate through letters
        for i in range(len(A[0])):
            #we need A[i][0] to be less than A[i+1][0] less than A[i+2][0].... etc.  If this isn't the case, we need to delete this column, because clearly we can't rearrange it.
            #Iterate through words.
            for j in range(1, len(A)):
                if A[j][i] >= A[j-1][i]:
                    continue
                else:
                    numDeletions += 1
                    break
        return numDeletions
