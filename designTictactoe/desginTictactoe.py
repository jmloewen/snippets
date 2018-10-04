#This is bad and slow and i feel bad for making this.
class TicTacToe(object):

    def checkForWinner(self, row, col, player):
        playerScoreCheck = player * len(self.board)
        if sum(self.board[row]) == playerScoreCheck:
            return True

        #sum col long way, because apparently im a fucking retard who cant do it shorthand.
        sumCol = 0
        for i in range(len(self.board)):
            sumCol += self.board[i][col]

        if sumCol == playerScoreCheck:
            return True

        #Then we have to check the diagonal. TL to BR, then BL to TR
        sumDiag = 0
        if row == col:
            i=0
            while i < len(self.board):
                sumDiag += self.board[i][i]
                i += 1
            if sumDiag == playerScoreCheck:
                return True
        sumDiag = 0
        if row+col == len(self.board) - 1:
            i=0
            while i < len(self.board):
                sumDiag += self.board[len(self.board)-1 - i][i]
                i += 1

        if sumDiag == playerScoreCheck:
            return True
        return False

    def __init__(self, n):
        self.board = []
        #self.player = False #False is X, True is O, init to False.
        for row in range(n):
            self.board.append([-n] * n)

    def move(self, row, col, player):
        self.board[row][col] = player

        #Check for a win condition.
        if self.checkForWinner(row, col, player):
            return player
        return 0
