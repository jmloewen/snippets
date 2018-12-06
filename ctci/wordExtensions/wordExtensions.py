#find all word extensions
#a word extension is some letter that is repeated 3 or more times.
#want to find all such extensions in the word.
#this is likely doable in O(N), can likely be done with a two pointer walk, or with a 'last value' sort of thing.

#for example, 'cheese' has no extensions, nor does 'chheese'.  'chhheeeseee' has three, at h, e, and the later e.

def wordExtensions(S):
    ctr = 0

    #will have to iterate through the entire string.
    #As we iterate through, we want to track the previous letter, as well as the current letter.
    #if the previous letter matches the current letter, AND the next letter, we have some extension.
    #to help with this, we can set a flag indicating whether or not we are in a extension.
    #or, we can just do a pointer walk instead.
    if len(S) < 3:
        return ctr

    prevprev = S[0]
    prev = S[1]
    i=2
    inRep = False
    while i < len(S):
        cur = S[i]

        #If the last 3 values match each other, we need to increase our counter, as long as we haven't counted this one already.
        if prevprev == prev == cur:
            if not inRep: #If we're not already in a repetition, flip flag to indicate we now are, so we don't add the same one twice.
                inRep = True
                ctr += 1
        else:#There is a mismatch in the values, so any existing match is now broken.  we're not in a repetition.
            inRep = False

        prevprev, prev = prev, cur
        i += 1
        
    return ctr

print(wordExtensions("cheese") == 0)
print(wordExtensions("cheeese") == 1)
print(wordExtensions("chhheese") == 1)
print(wordExtensions("chhheeese") == 2)
print(wordExtensions("cheeseee") == 1)
print(wordExtensions("chhheeeseee") == 3)
print(wordExtensions("ce") == 0)
print(wordExtensions("che") == 0)
print(wordExtensions("eee") == 1)
print(wordExtensions("cheeeeeeeeeeeeeseeeeeesssse") == 3)
print(wordExtensions("eeee") == 1)
print(wordExtensions("eesee") == 0)
print(wordExtensions("") == 0)

