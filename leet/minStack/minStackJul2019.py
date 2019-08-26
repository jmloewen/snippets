class MinStack:

    def __init__(self):
        self.stack = []
        self.minStack = []
        self.curMin = None
        """
        initialize your data structure here.
        """
        

    def push(self, x: int) -> None:
        self.stack.append(x)
        if self.curMin is None or self.curMin > x:
            self.curMin = x
        self.minStack.append(self.curMin)

    def pop(self) -> None:
        self.minStack.pop()
        if self.minStack:
            self.curMin = self.minStack[-1]
        else:
            self.curMin = None
        return self.stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.curMin
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()