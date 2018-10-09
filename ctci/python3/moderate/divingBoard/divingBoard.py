#class Solution:
#CTCI 16.11
#building a diving board by placing a bunch of planks of wood end to end.
#There are two types of planks - one of Shorter, and one of Longer.  Must use exactly K planks of wood.  Write a method to generate all possible lengths of the diving board.
def divingBoard(S, L, K):
    #Where shorter is the short length, longer is the long length, K is the number of planks used.  S and L are integers - we want the number of unique lengths we can get with K planks, NOT the number of unique orderings.  IE - K=2, SL == LS.
    #This means that SLLL == LLLS == LLSL == LSLL
    i=0
    boardSet = set()
    while i < K+1:
        #add up all "K pick i" values into a set.
        #i=0, 1, .... K.
        boardSet.add((i*S) + ((K-i) * L))
        i += 1
    return boardSet

#print(divingBoard(4, 5, 1))
