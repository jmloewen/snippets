class Solution(object):
    def nextClosestTime(self, time):
        #Approaches?
            #Generate all valid times with the 4 digits - inefficient but not THAT inefficient.  Pick the lowest one after given time.
            #Is there even another approach?
        
        
        #Look at the rightmost digit, and adjust upwards to the next smallest number above.
        #If this is not possible, look at the digit to its left and try the same thing.
            #If possible with the digit to the left, move this number up.  Then look at the number on the right and make it the smallest value possible.
            #If either of these cases can find a valid number, this is the correct answer and we're done.
        
        #If these are not possible, need to check the right most Hour counter.
        #This needs to find the next number up, SUPPOSING that the first left digit is 0 or 1.  If it's 2, it needs to find the next number up less than or equal to 3.
            
            #If such a number is found, now need to look back to the two rightmost digits to see if they can be reduced to values lower than what they're currently at, and preform this if possible.
            #If no such number is found, continue for the leftmost digit.
        #This number needs to increase from 0 to 1 or 2, supposing that it doesn't make the next field (the 2nd from the left) invalid as a result.  If it increases to 2, the next digit CANNOT be greater than 3, since time goes from 00:00 to 23:59.
        #If found a way to increase this value, need to cascade sideways to the right, reducing values on the right to their minimum.  They will obviously comply with the increase here, as this new value is 1 or 2, meaning 1 or 2 is in the set.
        
        #If there is no comfortable value for this number to increase to, the clock must be flipped around, and we must use the smallest possible clock value.  This will be composed of the smallest number we have, repeated 4 times.
        
        #If this value is equal to given, return given as a valid answer.
        
        th = time[0]
        h = time[1]
        tm = time[3]
        m = time[4]
            
        nums = sorted(set([int(th), int(h), int(tm), int(m)]))
        intTime = [int(th), int(h), int(tm), int(m)]
        
        #True means we successfully found the next value up.
        if self.nextNum(3, 9, intTime, nums):
            return str(intTime[0]) + str(intTime[1]) + ":" + str(intTime[2]) + str(intTime[3])
        #False means we didn't, and have to return the minimum value possible.
        return str(intTime[0]) + str(intTime[0]) + ":" + str(intTime[0]) + str(intTime[0])
        
    def nextNum(self, i, limit, intTime, nums):
        
        if i == 1:
            nextLimit = 2
            print("D")
        elif i == 2:
            if intTime[0] <= 1:
                print("E")
                nextLimit = 9
            else:
                print("F")
                nextLimit = 3
        elif i==3: #i is 3
            nextLimit = 5
        
        for j in range(1, len(nums)):
            if nums[j] > limit:
                print("B")
                if i == 0:#We need to set a minimum number.  no more digits to try to raise.  Escape from here.
                    return False
                
                #If returns true, this means we swapped a value above this and have to set a minimum and ret true.
                #If returns false, it means we didn't swap a value above this, and this will also ret false.
                if self.nextNum(i-1, nextLimit, intTime, nums):
                    intTime[i] = nums[0]
                    return True
                else:
                    return False
            #Case of being able to replace with the next smallest digit.
            if intTime[i] < nums[j]:
                intTime[i] = nums[j]
                print("G")
                return True
            else:
                #If we can't replace with the next smallest digit, but that value is under the limit, then this means this current value is greater than or equal to this value of nums[j].  We need to exhaust all of these values before moving to the next.
                #check the end value of j.  If it's equal to this last j value, need to escalate to next number leftward.
                if intTime[i] == nums[-1]:
                    if self.nextNum(i-1, nextLimit, intTime, nums):
                        intTime[i] = nums[0]
                        return True
                    else:
                        return False
                
        #First try to increase.
        #If cannot increase, recurse to the next value to try to increase that one.
        #Regardless, if we fail to increase, we will attempt to decrease before return.
        
#Recurring function that we give the current value to be increased, as well as the upper limit possible for this value.