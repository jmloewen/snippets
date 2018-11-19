#as seen in Leetcode Weekly Contest 108.  Have previously seen a variation of this in a google web screening

class Solution:
    def numUniqueEmails(self, emails):
        filteredEmails = set()
        for email in emails:
            address, domain = email.split('@')
            address = ''.join(address.split('.')).split('+')[0]
            fullEmail = ''.join([address, domain])
            filteredEmails.add(fullEmail)

        return len(filteredEmails)
