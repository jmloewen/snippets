class Solution:
    def isLongPressedName(self, name, typed):

        #Go through name.  If character in name is found in Typed, and no erroneous character not equal to character k or character k + 1 is found between character in name j and character in name j + 1, continue.  Else, we have to restart.
        #are we allowed other typos???!?

        if len(name) == 0:
            return True
        elif len(typed) == 0:
            return False

        start = typed.find(name[0])
        if start == -1:
            return False
        prev = name[0]
        i=1
        j=start+1
        while i < len(name) and j < len(typed):
            if name[i] == typed[j]:
                #If the character in j equals either the current value we are checking for, iterate.
                prev = name[i]
                i += 1
            elif prev == typed[j]:
                #if the character in j equals the rpevious value, i should not increase but j should, as this character is valid.
                pass
            else:
                #if it's not equal to either of these characters, this is an invalid character.
                return False
            #Character found, proceed onwards.
            j += 1

        #If we've exhausted all characters in name, then the entire name has been found.
        if i >= len(name):
            return True
        #Otherwise, we hit the end of J without finding all of i.  Return False.
        return False
