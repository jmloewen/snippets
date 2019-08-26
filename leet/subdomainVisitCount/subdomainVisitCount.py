#this is slow and bad
from collections import defaultdict
class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        
        domDict = defaultdict(lambda:0)
        domStrings = []
        
        for domain in cpdomains:
            
            data = domain.split(' ')
            count = int(data[0])
            url = data[1]
            domDict[url] += count
            
            splitDom = url.split(".", maxsplit=1)
            
            if len(splitDom) > 1:
                splitDom = splitDom[1]
                
                while splitDom:
                    domDict[splitDom] += count
                    splitDom = splitDom.split(".", maxsplit=1)
                    if len(splitDom) > 1:
                        splitDom = splitDom[1]
                    else:
                        break
        
        for dom in domDict:
            domStrings.append(str(domDict[dom]) + " " + dom)
            
            
        return domStrings