from collections import defaultdict
class Solution:
    words = None
    #Clearly as is, it's one book per array.  Could modularize it, don't feel like it.
    def storeWordsInBook(self, A):
        if self.words is None:
            self.words = defaultdict(lambda:0)
            curWord = ""

            for ltr in A:
                #Some characters are allowed as intermediats like apostrophes and quotes.
                if ltr.isalpha() or ltr == "'" or ltr == "-":
                    curWord += ltr
                else:
                    #Sometimes people put dashes and other things in between words.  Filter these out by making sure everything stored starts with a letter.
                    if curWord and curWord[0].isalpha():
                        self.words[curWord.lower()] += 1
                        curWord = ""
            if curWord:
                self.words[curWord.lower()] += 1

            if len(self.words) < 1:
                self.words = None #No valid words found, return to nothing.

    #16.2 - Design a method to find the frequency of occurrences of any given word in a book.
    #16.2.1 0 what if we were running this algorithm multiple times?
    def wordFrequencies(self, A, lookup):
        #Could also do this with a Trie, probably not worthwhile in this case.
        #Assuming that a capitalized word is the same as a lowercase word.
        self.storeWordsInBook(A)
        if self.words:
            return self.words[lookup.lower()]
        return None

        #All words now stored,  Preform lookup.


    #This is about as efficient as just looking for this one word.  If we wanted to find other words again later, we have our dictionary already, and can extract 'words' to another function as a one time storage.


def testSolution(F, expected, testNumber):
    if F != expected:
        print("Test Number: ", testNumber, " Failed.  Expected: ", expected, "Received: ", F)
        return False
    return True

s = Solution()
wap = Solution()


testSolution(wap.wordFrequencies("On the contrary,” he said, in a querulous and angry tone that contrasted with his flattering words, “on the contrary, your excellency’s participation in the common action is highly valued by His Majesty; but we think the present delay is depriving the splendid Russian troops and their commander of the laurels they have been accustomed to win in their battles,” he concluded his evidently prearranged sentence. Kutúzov bowed with the same smile. “But that is my conviction, and judging by the last letter with which  His Highness the Archduke Ferdinand has honored me, I imagine that the Austrian troops, under the direction of so skillful a leader as General Mack, have by now already gained a decisive victory and no longer need our aid,” said Kutúzov.  The general frowned. Though there was no definite news of an Austrian defeat, there were many circumstances confirming the unfavorable rumors that were afloat, and so Kutúzov’s suggestion of an Austrian victory sounded much like irony. But Kutúzov went on blandly smiling with the same expression, which seemed to say that he had a right to suppose so. And, in fact, the last letter he had received from Mack’s army informed him of a victory and stated strategically the position of the army was very favorable.", "Majesty"), 1, 0)
testSolution(s.wordFrequencies("the quick brown fox jumped over the lazy dog and also and also some extra words.  I hope that all of the spaces and punctuation don't throw things:off!", "don't"), 1, 1)
testSolution(s.wordFrequencies("the quick brown fox jumped over the lazy dog and also and also some extra words.  I hope that all of the spaces and punctuation don't throw things:off!", "off!"), 0, 2)
testSolution(s.wordFrequencies("the quick brown fox jumped over the lazy dog and also and also some extra words.  I hope that all of the spaces and punctuation don't throw things:off!", ":"), 0, 3)

testSolution(s.wordFrequencies("the quick brown fox jumped over the lazy dog and also and also some extra words.  I hope that all of the spaces and punctuation don't throw things:off!", " "), 0, 4)
testSolution(s.wordFrequencies("the quick brown fox jumped over the lazy dog and also and also some extra words.  I hope that all of the spaces and punctuation don't throw things:off!", ":"), 0, 5)

empty = Solution()

testSolution(empty.wordFrequencies("", ":"), None, 6)
testSolution(empty.wordFrequencies(":", ""), None, 7)
testSolution(empty.wordFrequencies("shoes", "shoes"), 1, 8)
