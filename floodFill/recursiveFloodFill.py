class Solution:
    def floodFill(self, image, sr, sc, newColor):
        #Use a hash table
        recolor = {}
        color = image[sr][sc]

        #image is all values in the image
        #sr is the tuple indicating where we want to start flood fill. (sr is row, sc is column)

        #If it's the same color, there's no work to be done.
        if color == newColor: return image

        #The recursive solution goes like this:
        #Check Up, Right, Down, Left to see if they have the color to be filled.  If they do, recurse on that cell.

        #first, see which we can traverse to of up/right/down/left.
        up = sr>0 and image[sr-1][sc] == color
        down = sr<len(image)-1 and image[sr+1][sc] == color
        left = sc>0 and image[sr][sc-1] == color
        right = sc<len(image[0])-1 and image[sr][sc+1] == color

        image[sr][sc] = newColor

        if up: self.floodFill(image, sr-1, sc, newColor)
        if right: self.floodFill(image, sr, sc+1, newColor)
        if down: self.floodFill(image, sr+1, sc, newColor)
        if left: self.floodFill(image, sr, sc-1, newColor)

        return image
