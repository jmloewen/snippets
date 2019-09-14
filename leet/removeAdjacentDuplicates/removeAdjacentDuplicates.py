class Solution:
    def removeDuplicates(self, S: str) -> str:
        i=1
        
        while i < len(S):
            if S[i] == S[i-1]:
                S = S[:i-1] + S[i+1:]
                if i > 1:
                    i -= 1
                
            else:
                i += 1
        return S
