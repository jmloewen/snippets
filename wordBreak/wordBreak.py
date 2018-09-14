#A simple DP 38% solution, based off of the simple geeksForGeeks implementation.
class Solution:
    def wordBreak(self, s, wordDict):
        if not s:
            return True

        #Create a DP Table.
        dpTable = [False] * (len(s) + 1)

        i=1
        while i <= len(s):
            #Check if current prefix can make this entry True.
            if not dpTable[i] and s[0:i] in wordDict:
                dpTable[i] = True

            #If this ith value has been marked true, check for substrings starting from i+1 and going forward.
            if dpTable[i]:
                #If at the end, ret True.
                if i == len(s):
                    return True

                j=i+1

                while j <= len(s):
                    if not dpTable[j] and s[i:j] in wordDict:
                        dpTable[j] = True

                    if j == len(s) and dpTable[j]:
                        return True
                    j+=1
            i+=1
        return False
