class Solution:
    #Suboptimal, ~75%
    #Written after misreading the question, thinking that i needed to return the starting index of some maximal subarray.  Actually needed to return the size of this subarray - modified to accommodate this
    
    def totalFruit(self, tree):
        #This is the same as maximal substring with at most 2 distinct characters.

        if len(tree) < 3:
            return len(tree)

        #how did i do this earlier?

        #iterate through, stopping when we would have more than 2 distinct types of values.
        #This creates a sliding window of valid solutions.
        rv = -1
        curMax = -1
        left = 0
        chars = {}


        for i in range(0, len(tree)):
            if chars.get(tree[i]):
                chars[tree[i]] += 1
            else:
                if len(chars) == 2:#Then we're full already.  left must advance until it reaches a space where character[left] is no longer seen.
                    #We can do this with the dictionary - if we manage to make one of the two values inside the dict equal 0, we're back to at most 2 unique characters.
                    #Calculate our new starting point.  The only time we can
                    if curMax < i-left:
                        curMax = i-left
                        rv = left
                    #move left to the right until we have at most 2 unique characters again.
                    while len(chars) == 2:
                        chars[tree[left]] -= 1
                        if chars[tree[left]] == 0:
                            del chars[tree[left]]
                        left += 1

                #add in the new character.
                chars[tree[i]] = 1


        if len(chars) == 2:
            if curMax < i+1-left:
                return i+1-left
        elif rv == -1:
            return len(tree)
        return curMax
