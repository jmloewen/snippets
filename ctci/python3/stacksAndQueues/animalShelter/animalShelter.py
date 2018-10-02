#An animal shelter system with Dogs and Cats.
#Python makes this trivial.
#People can request either oldest, or Dog, or Cat.  If oldest take oldest animal.  If Dog, oldest dog, Cat oldest Cat.
class AnimalFarm(object):
    def __init__(self):
        self.monitor = 0

    def makeAnimal(self):
        self.monitor += 1
        return self.monitor

class Shelter(object):

    def __init__(self):
        self.cq = []
        self.dq = []
        self.af = AnimalFarm()

    def enqueue(self, dog=False):
        animal = self.af.makeAnimal()
        if dog:
            self.dq.append(animal)
        else:
            self.cq.append(animal)

    def dequeueDog(self):
        return self.dq.pop(0)
    def dequeueCat(self):
        return self.cq.pop(0)

    def dequeueAny(self):
        if not self.dq:
            return self.dequeueCat()
        elif not self.cq:
            return self.dequeueDog()
        if self.cq[0] < self.dq[0]:
            return self.dequeueCat()
        return self.dequeueDog()

sh = Shelter()
sh.enqueue(True)
sh.enqueue(True)
sh.enqueue(False)
sh.enqueue(True)
sh.enqueue(True)
sh.enqueue(False)
sh.enqueue(True)
sh.enqueue(True)
sh.enqueue(False)

print(sh.dequeueAny())
print(sh.dequeueDog())
print(sh.dequeueDog())
print(sh.dequeueDog())
print(sh.dequeueAny())
print(sh.dequeueAny())
print(sh.dequeueAny())
print(sh.dequeueAny())
