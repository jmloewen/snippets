def lrBrackets(data):
    l = 0
    r = len(data)-1
    lastL = 0
    lastR = len(data) #Invalid, might work for now though.
    while l < r:
        #Iterate to the next left brace.
        while data[l] != "(" and l < r:
            l += 1

        if data[l] == "(":
            while data[r] != ")" and l < r:
                r -= 1
            if data[r] == ")":
                lastL = l
                lastR = r
                l += 1
                r -= 1

    if lastR == len(data):#Then neither left nor right have changed.
        if data:
            if data[lastR - 1] == "(":
                return r
            else:
                return lastR
        else:
            return 0
    lastL = lastL + 1 #Increment by 1 to satisfy that we return Count instead of Index.

    if lastL < lastR:
        if data[lastL] == ")":#If the next piece of data is a right brace, continue until we run into RHS or a left brace.
            while data[lastL] == ")" and lastL < lastR:
                lastL += 1
    return lastL


if lrBrackets("()") != 1:
    print("Case 1 failed")
if lrBrackets("(())") != 2:
    print("Case 2 failed")
if lrBrackets("()()") != 2:
    print("Case 3 failed")
if lrBrackets("()(()))") != 4:
    print("Case 4 failed")
if lrBrackets("())))))))))))))())") != 16:
    print("Case 5 failed")
if lrBrackets("(()(((((((((((((()") != 2:
    print("Case 6 failed")
if lrBrackets("(())))(") != 4:
    print("Case 7 failed")
if lrBrackets(")())(") != 3:
    print("Case 8 failed")
if lrBrackets("") != 0:
    print("Case 9 failed")
if lrBrackets("(((((") != 0:
    print("Case 10 failed")
if lrBrackets(")))))") != 5:
    print("Case 11 failed")
if lrBrackets(")(") != 1:
    print("Case 12 failed")
if lrBrackets(")))))))(") != 7:
    print("Case 13 failed")
if lrBrackets(")(((((((") != 1:
    print("Case 14 failed")
if lrBrackets(")()()()()(") != 5:
    print("Case 15 failed")
if lrBrackets(")((") != 1:
    print("Case 16 failed")
if lrBrackets("))(") != 2:
    print("Case 17 failed")
