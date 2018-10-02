#A python implementation of this:
#https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/

#Basically, we keep the minimum value, and if we run across a new value that is smaller, we store this new negative value (2*x - curMin) in the stack and the actual new min value in Min.
#This lets us keep a monitor on the current minimum value, but the end result is a stack that has incorrect values on the interior - only the top element can be guaranteed to be correct.
class MinStack(object):
    def __init__(self):
        self.stack = []
        self.min = None

    def push(self, x):
        if not self.stack:
            self.stack.append(x)
            self.min = x
        elif x < self.min:
            self.stack.append(2*x - self.min)
            self.min = x
        else:
            self.stack.append(x)

    def pop(self):
        if self.stack:
            top = self.stack.pop(-1)

            if top < self.min:
                self.min = 2 * self.min - top

    def top(self):
        if self.stack:
            top = self.stack[-1]

            if top < self.min:
                return self.min
            return top

    def getMin(self):
        if self.stack:
            return self.min
        return None
