class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        
        i = j = 0
        
        while i < len(S):
            if S[i] == '#': #erase this value and the previous one
                if i == 0:
                    S = S[1:]
                else:
                    S = S[:i-1] + S[i+1:]
                    i -= 1
                
            else:
                i += 1
            
        while j < len(T):
            if T[j] == '#':
                if j == 0:
                    T = T[1:]
                else:
                    T = T[:j-1] + T[j+1:]
                    j -= 1
            else:
                j += 1
                
        print(S)
        print(T)
        return S == T
    