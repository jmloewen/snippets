#there is a more pythonic way to do this, but that's not this!
class Solution:
    def letterCombinations(self, digits):
        ltrs = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
        #note that index 2 == number 2.
        combinations = []
        for num in digits:
            intNum = int(num)
            #for every existing combination, we want to append all possible new combinations created by this number.
            if not combinations:
                for i in range(len(ltrs[intNum])):
                    combinations.append(ltrs[intNum][i])
            else:

                #modify first then append n-1 more.
                newCombinations = []
                while combinations:
                    base = combinations.pop(0)
                    for i in range(len(ltrs[intNum])):
                        newCombinations.append(base + ltrs[intNum][i])
                combinations = newCombinations

                    #for every existing character on combinations, make a new one.
        return combinations
        """
        :type digits: str
        :rtype: List[str]
        """
        
