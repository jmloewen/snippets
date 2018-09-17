#Preformed with list comprehension.
class Solution:
    def plusOne(self, digits):
        #Map digits into strings, join them, parse into integer and add 1.
        num = int(''.join(map(str, digits))) + 1
        #put it back into a list and return it.
        return [int(d) for d in str(num)]
