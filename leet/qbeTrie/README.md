An implementation of Kwery Bie Eggsample, written for a technical interview, using a Trie.

Implementation requires that data be output in the same order and format that it was input, and that we be able to add/lookup/delete data in a specified format.

Implementation ended up being too slow to pass the interview, as my Trie implementation, as noted in the code, created a copy of each Trie Payload on each subsequent node instead of only at the end of the Trie branch.  This caused a large slowdown and high memory usage, failing two of the test cases.

A better Trie implementation is here: https://github.com/jmloewen/pyTrie

Typos above exist to maintain the innocence of the company interviewing, so they may re-use this question.
