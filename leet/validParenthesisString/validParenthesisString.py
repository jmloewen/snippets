#a slow 83% solution.
class Solution(object):
    def checkValidString(self, s):
        #note that * can be treated as a left or a right or a blank.
        #if we have a * we can turn it into anything or nothing - so if we would be 2 mistakes away from a proper string, and have 2 or more * so far, we can complete the string.
        #however, we must have those * by the time we encounter the mistake, or it is still invalid.
        
        #thought: loop through, keeping count of * and mistakes.  If num of * > num of mistakes at any time we encounter a mistake, then return True.  However, if this is not the case at any point, return false.
        
        i = stars = 0
        lefts = []
        rights = []
        stars = []
        
        #first, go through and remove all valid braces
        #then, go through and see if the stars can satisfy the remaining string.
        
        while i < len(s):
            if s[i] == '(':
                lefts.append(i)
            elif s[i] == ')':
                if lefts:
                    lefts.pop()
                elif stars:
                    stars.pop(0)
                else:
                    print("no valid left for a right brace, returning.")
                    return False
            else:
                stars.append(i)
            i +=1
        i=0
        while lefts:
            if stars and lefts[0] < stars[-1]:
                
                #find the leftmost star that satisfies
                j=0
                while j < len(stars):
                    if stars[j] > lefts[0]:
                        lefts.pop(0)
                        stars.pop(j)
                        break
                    j += 1
                        
            else:
                print("no valid right or * for a left brace, returning.")
                print("Left: ", lefts, "stars: ", stars)
                return False
            i += 1
        return True
                
            