class Solution:
    def trailingZeroes(self, n):
        i=0
        while n > 5 ** i:
            i += 1

        zeroes = 0
        while i > 0:
            zeroes += int(n/5**i)
            i -= 1
        return zeroes
        
