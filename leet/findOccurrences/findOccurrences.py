class Solution:
    #a bad 100% solution
    def findOcurrences(self, text: str, first: str, second: str) -> List[str]:
        
        words = text.split(' ')
        ret = []
        for i in range(1, len(words) - 1):
            if words[i] == second and words[i-1] == first:
                ret.append(words[i+1])
                
        return ret
    '''
    1078. Occurrences After Bigram
Easy

Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

For each such occurrence, add "third" to the answer, and return the answer.

 

Example 1:

Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]

Example 2:

Input: text = "we will we will rock you", first = "we", second = "will"
Output: ["we","rock"]

 

Note:

    1 <= text.length <= 1000
    text consists of space separated words, where each word consists of lowercase English letters.
    1 <= first.length, second.length <= 10
    first and second consist of lowercase English letters.

Accepted
17,475
Submissions
27,090
'''