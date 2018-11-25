#From leetcode weekly 112

class Solution(object):
    def validateStackSequences(self, pushed, popped):
        #observations:
        #The values of 'popped' must have at some point been the top value in the stack.
        #This means that in order to validate the first value of popped, we MUST pop it at the specific time right after it was pushed in.
        #If we don't have a value in the stack and we find it in popped, we have to push until we find that value.

        s = []
        while pushed or s:
            if len(s) == 0 or s[-1] != popped[0]:
                if len(pushed) == 0:
                    return False
                s.append(pushed.pop(0))
            else:
                s.pop(len(s) - 1)
                popped.pop(0)
        return True


        """
        :type pushed: List[int]
        :type popped: List[int]
        :rtype: bool
        """
        
