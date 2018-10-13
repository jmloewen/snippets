class Solution:
    def decodeString(self, s):
        #This will NOT be a series of numbers.  It will be a series of characters with numeric values.
        #We will then parse these numbers as needed.  This is in case of a double digit repeated value.
        numStack = []

        #This is for values contained within the key.
        ltrStack = [""]

        #No digits in the letters.  Very nice!
        #Always valid input.

        for i, c in enumerate(s):
            #Point: There is no case of '[[', since a number is required before every open brace.
            if c == "[":
                #Our current number is now finished.
                    #This means that we need to make a new entry on top of the stack.
                ltrStack.append([""])
                #We will now proceed to process some word.
                pass
            elif c == "]":
                #Real shit
                #when a bracket is closed, we must produce the string that is indicated by the top of numstack and ltrstack.
                #this string is then appended to the next value down the stack.
                #We then pop the two top values from the stack, as they are no longer needed.
                appendString = ''.join(ltrStack.pop(-1) * int(numStack.pop(-1)))
                ltrStack[-1] = ''.join(ltrStack[-1]) + appendString

            #Case of appending to numStack.
            elif c.isdigit():
                if numStack and s[i-1].isdigit():
                    numStack[-1] += c#Append this value to the end of the current number.
                else:
                    numStack.append(c)
            else:
                #it's some letter to be processed.
                ltrStack[-1] += c
                #Anything else should be a valid character.  We'll see!  would otherwise use isalpha().

        return ltrStack[0]
