class Solution:
    def plusOne(self, digits):
        #Preformed iteratively:
        numStr = ""
        for d in digits:
            numStr = numStr + str(d)
        num = int(numStr) + 1

        ret = []
        for n in str(num):
            ret.append(int(n))
        return ret
