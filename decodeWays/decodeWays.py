class Solution(object):
    def numDecodings(self, s):
        if not s or s[0] == '0':
            return 0
        elif len(s) == 1:
            return 1

        #we dont need a dp table for this.
        pp = p = 1
        #pp = prevprev.  two back.
        for i in range(1, len(s)):
            num = int(s[i])
            prev = int(s[i-1])
            cur = 0
            if '1' <= s[i] <= '9':
                cur += p
            if '10' <= s[i-1] + s[i] <= '26':
                cur += pp
            pp = p
            p = cur
        return cur
