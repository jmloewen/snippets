
def findBusesInRange(cities, whichCities):
    #Cities is our range of cities.  Sort them in ascending order
    #which Cities are the values in each range that we want to find
    #sort city routes by start city

    cities = sorted(cities, key=lambda x:x[0])
    counts = []
    for city in whichCities:
        c = 0
        for cityRange in cities:
            if city >= cityRange[0] and city <= cityRange[1]:
                c += 1
            #If city is less than the lower range and we've already add in at least one value, there will be no more valid cities.  Break.
            elif city < cityRange[0] and c >= 1:
                break
        counts.append(c)
    return counts

#Handle inputs
tests = int(input())
T=0
while T < tests:
    interestedCities = []
    N = input()
    cityRanges = input()
    numCities = int(input())
    for i in range(numCities):
        interestedCities.append(int(input()))

    splitCities = cityRanges.split(" ")
    i=0
    cities = []
    while i < len(splitCities):
        if i%2==0:
            city = [int(splitCities[i])]
        else:
            city.append(int(splitCities[i]))
            cities.append(city)
        i+=1

    i = 0

    bIR = findBusesInRange(cities, interestedCities)

    print("Case #", end="")
    print(T+1, end="")
    print(":", end=" ")
    for val in bIR:
        print(val, end=" ")
    print()

    #Extra space between test cases
    T += 1
    if T < tests:
        input()
