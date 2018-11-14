#thm:
#we only have to check values that are >= the current value.
#this means we can probably make use of some sort of running min / max value.
#if we used a running max, we could guarantee that upon finding the 'next biggest' value, we could just return the length between cur and 'max'.  in the example this would occur twice - once at 1, and once at the end.

#Is this a variation of holding water?

#small optimization:
#If we encounter some value to the left that is less than ours, we can jump backwards 'count' values - since all of these values must be also less than this value to our left.
#we can then proceed to check the next value, 'count' values down.
#this optimization was all that was needed for a pass.
#A better implementation uses a stack to track previous smaller values, and discards storing these values altogether.

class StockSpanner(object):
    def __init__(self):
        self.span = []
        self.prices = []

    def next(self, price):

        if not self.span:
            self.span = [1]
            self.prices = [price]
            return 1

        else:
            count = 1
            i=len(self.prices) - 1

            while i > -1:
                if self.prices[i] <= price:
                    count += self.span[i]
                    i -= self.span[i]
                else:
                    break

            self.span.append(count)
            self.prices.append(price)
            return self.span[-1]
