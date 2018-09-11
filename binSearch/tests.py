
def testResult(real, expected, key=0):
    if real != expected:
        print("Test #", key," Failed. Real:", real, "Expected:", expected)
    else:
        print("Test #", key, "Passed.")

T = [0, 1, 2, 3, 4, 5, 6, 7, 8]
s = Solution()
testResult(s.binarySearch(T, 0), 0, 0)
testResult(s.binarySearch(T, 1), 1, 1)
testResult(s.binarySearch(T, 2), 2, 2)
testResult(s.binarySearch(T, 3), 3, 3)
testResult(s.binarySearch(T, 4), 4, 4)
testResult(s.binarySearch(T, 5), 5, 5)
testResult(s.binarySearch(T, 6), 6, 6)
testResult(s.binarySearch(T, 7), 7, 7)
testResult(s.binarySearch(T, 8), 8, 8)

testResult(s.binarySearch(T, -1), -1, 9)
testResult(s.binarySearch(T, 4.5), -1, 10)
testResult(s.binarySearch(T, 8.5), -1, 11)
testResult(s.binarySearch(T, 0.5), -1, 12)
testResult(s.binarySearch(T, 0.0), 0, 13)
testResult(s.binarySearch(T, 0.1), -1, 13.5)

T2 = []
testResult(s.binarySearch(T2, 5), -1, 14)
testResult(s.binarySearch(T2, -1), -1, 15)

T3 = [0]
testResult(s.binarySearch(T3, 0), 0, 16)

testResult(s.binarySearch(T3, 1), -1, 17)
testResult(s.binarySearch(T3, -1), -1, 18)

T4 = [5,5,5,5,5,5,5,5,5,5,5]
testResult(s.binarySearch(T4, 5), int(len(T4)/2), 19)

testResult(s.binarySearch(T4, 6), -1, 20)




testResult(s.iterBinSearch(T, 0), 0, 21)
testResult(s.iterBinSearch(T, 1), 1, 22)
testResult(s.iterBinSearch(T, 2), 2, 23)
testResult(s.iterBinSearch(T, 3), 3, 24)
testResult(s.iterBinSearch(T, 4), 4, 25)
testResult(s.iterBinSearch(T, 5), 5, 26)
testResult(s.iterBinSearch(T, 6), 6, 27)
testResult(s.iterBinSearch(T, 7), 7, 28)
testResult(s.iterBinSearch(T, 8), 8, 29)


testResult(s.iterBinSearch(T, 4.5), -1, 30)
testResult(s.iterBinSearch(T, 8.5), -1, 31)
testResult(s.iterBinSearch(T, 0.5), -1, 32)
testResult(s.iterBinSearch(T, 0.0), 0, 33)
testResult(s.iterBinSearch(T, 0.01), -1, 34)
testResult(s.iterBinSearch(T, -1), -1, 35)
testResult(s.iterBinSearch(T2, 5), -1, 36)
testResult(s.iterBinSearch(T2, -1), -1, 37)
testResult(s.iterBinSearch(T3, 0), 0, 38)

testResult(s.iterBinSearch(T3, 1), -1, 39)
testResult(s.iterBinSearch(T3, -1), -1, 40)

testResult(s.iterBinSearch(T4, 5), int(len(T4)/2), 41)

testResult(s.iterBinSearch(T4, 6), -1, 42
