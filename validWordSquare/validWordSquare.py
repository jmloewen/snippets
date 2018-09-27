#A bad standard solution.
class Solution:
    def validWordSquare(self, words):
        for i in range(len(words)):
            col = ""
            for word in words:
                try:
                    col = col + word[i]
                except:
                    break
            if words[i] != col:
                return False
        return True
