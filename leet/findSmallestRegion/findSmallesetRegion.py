class Solution:
    def findSmallestRegion(self, regions: List[List[str]], region1: str, region2: str) -> str:
        #definitely suboptimal, but accepted for Leetcode Contest Biweekly 13

        #for each container region
        #if they do not already exist, assign their value to an empty string
        #for each contained region (values 1 through n for each value in list)
        #create a dictionary entry and assign their value to the string value of parent
        #once we have gone over the entire list, we can use the dictionary entries of region1 and region2 to search the dictionary for parents.
        #we go from the top of these lists downward until we find a mismatch and return the last found match.
        
        #O(N) for creating the dictionary
        #O(N) for walking up and creating the list twice
        #O(N) for each walkthrough of region1/region2 parents.
        
        regionDict = {}
        
        for i in range(len(regions)):
            subregions = regions[i]
            
            if not regionDict.get(subregions[0]):
                regionDict[subregions[0]] = None
                
            for j in range(1, len(subregions)):
                regionDict[subregions[j]] = subregions[0]
                
        
        #get list of parent regions for r1 and r2
        parent = regionDict[region1]
        
        r1Parents = [region1]
        
        while parent:
            r1Parents.append(parent)
            parent = regionDict[parent]
        
        parent = regionDict[region2]
        
        r2Parents = [region2]
        
        while parent:
            r2Parents.append(parent)
            parent = regionDict[parent]

        lastMatch = None
        while r2Parents and r1Parents:
            if r2Parents[-1] == r1Parents[-1]:
                lastMatch = r1Parents[-1]
                r1Parents.pop()
                r2Parents.pop()
            else:
                return lastMatch
        return lastMatch
        
        
        '''
        1257. Smallest Common Region

        User Accepted: 705
        User Tried: 864
        Total Accepted: 719
        Total Submissions: 1705
        Difficulty: Medium

        You are given some lists of regions where the first region of each list includes all other regions in that list.

        Naturally, if a region X contains another region Y then X is bigger than Y.

        Given two regions region1, region2, find out the smallest region that contains both of them.

        If you are given regions r1, r2 and r3 such that r1 includes r3, it is guaranteed there is no r2 such that r2 includes r3.

        It's guaranteed the smallest region exists.

        

        Example 1:

        Input:
        regions = [["Earth","North America","South America"],
        ["North America","United States","Canada"],
        ["United States","New York","Boston"],
        ["Canada","Ontario","Quebec"],
        ["South America","Brazil"]],
        region1 = "Quebec",
        region2 = "New York"
        Output: "North America"

        

        Constraints:

            2 <= regions.length <= 10^4
            region1 != region2
            All strings consist of English letters and spaces with at most 20 letters.


        '''