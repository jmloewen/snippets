#very simple stack problem

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        
        for i in range(len(s)):
            if s[i] == '(':
                stack.append('b')
            elif s[i] == '{':
                stack.append('c')
            elif s[i] == '[':
                stack.append('q')
            elif s[i] == ')':
                if stack and stack[-1] == 'b':
                    stack.pop()
                else:
                    return False
            elif s[i] == ']':
                if stack and stack[-1] == 'q':
                    stack.pop()
                else:
                    return False
            elif s[i] == '}':
                if stack and stack[-1] == 'c':
                    stack.pop()
                else:
                    return False
            else: #invalid character
                return False
        if stack:
            return False
        return True