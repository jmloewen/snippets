# Simulate a game of tic tac toe.

# * The board is three by three. There are two players. You may choose which of the two players starts the game.
# * To simulate a player turn, make a move on the board at random. In other words, every open square on the board should have an equal probability of being chosen for the player’s move at each turn.
# * Game ends when the board is full or a player has three of their marker in a row, column, or diagonal. 
# * When the game is over, your solution should print out the board.

#[0, 1, 2] [3,4,5], [6,7,8]

import random

class TicTacToe():
    
    board = []
    player = False #false indicates O, True indicates X
    rand = None #what are we picking next?
    
    def __init__(self):
        self.board = [['-','-','-'],['-','-','-'],['-','-','-']]
        self.rand = self.getRand() #pick the first player
        self.player = False
        
    def getRand(self):
        
        #bad - could be improved by random gen of 0-8 and iterating through them.
        
        return random.randint(0, 8)
    
    def pickSpace(self):
        #pick random value
        #check which array it should be in, arrays of len 3
        #check value within that array
        
        row = self.rand // 3
        col = self.rand % 3
        
        while self.board[row][col] != '-':
            self.rand = self.getRand()
            row = self.rand // 3
            col = self.rand % 3

        #should be here with valid row and column
        if self.player:
            self.board[row][col] = 'X'
        else:
            self.board[row][col] = 'O'
            
        
    
    def checkForWinner(self):
        #there are only 8 win cases.  check
        
        for i in range(len(self.board)):
            if self.board[i][0] != '-' and self.board[i][0] == self.board[i][1] and self.board[i][0] == self.board[i][2]:
                return True
            if self.board[0][i] != '-' and self.board[0][i] == self.board[1][i] and self.board[0][i] == self.board[2][i]:
                return True
        
        if self.board[0][0] != '-' and self.board[0][0] == self.board[1][1] and self.board[0][0] == self.board[2][2]:
            return True
            
        elif self.board[0][2] != '-' and self.board[0][2] == self.board[1][1] and self.board[0][2] == self.board[2][0]:
            return True
        
        else:
            return False
    
    def printBoard(self, winner):
        
        if winner:
            if (self.player):
                print("Winner is X!")
            else:
                print("Winner is O!")
        
        for i in range(len(self.board)):
            print(self.board[i])
        
    def runGame(self):
        #1. board exists.  Run the simulation.
        #2. output end board result via a Print.
        
        winner = False
        
        for i in range(0, 9):
            
            #run each step of the game
            self.pickSpace()
            
            #check for winner
            
            #if we have a winner, display self.player
            
            winner = self.checkForWinner()
            if winner:
                break
            else:
                self.player = not self.player
            
        #cats game
        if not winner:
            print("Cats game!")
        self.printBoard(winner)
        #print out the board regardless.
    
ttt = TicTacToe()

ttt.runGame()


#what i shouldve done for the random numbers.  Generate list and just iterate through it.
def generateRandom():
    moves = [0,1,2,3,4,5,6,7,8]
    random.shuffle(moves)
    return moves