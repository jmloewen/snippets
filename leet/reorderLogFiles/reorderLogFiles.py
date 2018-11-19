#weekly contest 110
#there's gotta be a way to do this by using python's "sorted", but I could not find a great way to do it
#instead, I created an insertion sort.  If there was some guarantee on the length of log entries for each log entry, I could have easily used sorted.  However, since I had no guarantee on this, it was easier for me to just make my own sorting function

class Solution(object):

    def insertWordsGoodly(self, A, log):
        if not A:
            A.insert(0, log)
            return


        #compare new word to each word in sequence, insert when we find a fitting placement.

        logSplit = log.split()

        for r in range(len(A)):
            recEqual = True
            recSplit = A[r].split()
            for i in range(1, len(logSplit)):
                #compare to its counterpart in the current list A.
                if i < len(recSplit):
                    #then we can compare.
                    if logSplit[i] < recSplit[i]:
                        A.insert(r, log)
                        return
                    elif logSplit[i] > recSplit[i]:
                        recEqual = False
                        break
                else:
                    #then we're equal up to this point, but the inserted record is longer than the existing one.  break.
                    break

            if recEqual:
                #if the records are thus far equal, and the inserted one is shorter than the existing record at r, this one should be inserted at this point.
                if len(logSplit) < len(A[r]):
                    A.insert(r, log)
                    return
                elif len(logSplit) > len(A[r]):
                    continue
                else:
                    if logSplit[0] < recSplit[0]:
                        A.insert(r, log)
                        return
                    #they can't be equal here, by question definition.
            #if we're here, we're inserting at the end.
        A.append(log)

                #else, they are the same length

            #if we are here, compare identifiers.  if identifier is less while all other things are equal, we insert here.  else we continue to the next record.


        #this will be suboptimal and a suboptimal implementation, but it should work to arrange these words properly.


    def reorderLogFiles(self, logs):
        #for each log string, want the words at the front the numbers at the back, otherwise maintaining the same order.

        #each value after the log identifier will contain either only letters or only numbers.
            #number ones must be returned in the original processed order.
            #letter ones must be returned in alphabetical order, identifier breaking ties.
        #two lists.
        #one stores the numeric logs, will be appended at the end.
        #other stores the word logs, and is sorted based on the contained words.
        numList = []
        wordList = []
        #thoughts:
        #could combine the words together and sort with < and =
        #
        for log in logs:
            logList = log.split(" ")

            if logList[1].isdigit():
                numList.append(log)
            else:
                #it's a letter one.
                wordList.append(log)

        #now have some wordList filled with the word ones.
        #we want to sort each value of x[i] alphabetically.
        sortedWordList = []

        for rec in wordList:
            self.insertWordsGoodly(sortedWordList, rec)

        return sortedWordList + numList
        """
        :type logs: List[str]
        :rtype: List[str]
        """
        
