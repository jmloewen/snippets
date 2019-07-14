from threading import Lock
class FooBar:
    def __init__(self, n):
        self.n = n
        self.lock = Lock()
        self.lock2 = Lock()
        self.lock.acquire()
        self.lock2.acquire()


    def foo(self, printFoo: 'Callable[[], None]') -> None:
        
        for i in range(self.n):
            
            # printFoo() outputs "foo". Do not change or remove this line.
            
            printFoo()
            
            self.lock.release()
            self.lock2.acquire()


    def bar(self, printBar: 'Callable[[], None]') -> None:
        for i in range(self.n):
            self.lock.acquire()
            
            # printBar() outputs "bar". Do not change or remove this line.
            
            printBar()
            
            self.lock2.release()
