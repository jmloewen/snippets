#There is an obvious O(N^2) solution.  In a test, this is what I would implement.
#maximum CONSECUTIVE days, not all days before.
#this runs to completion and works, but is too slow.
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
            for i in range(len(self.prices) - 1, -1, -1):
                if self.prices[i] <= price:
                    count += 1
                else:
                    break
            self.span.append(count)
            self.prices.append(price)
            return self.span[-1]

        """
        :type price: int
        :rtype: int
        """



# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)
