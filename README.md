# Software Engineering OOP principles and good practices to avoid spaghetti code

### your code smells bad and you should feel bad

## OOP: what a beauty
## Engineering Principles
## OOP Modelling


# OOP: Concepts
Objects are made through classes, what does this mean? Classes are blueprints for whatever you want to make. You use that blueprint to create (or instantiate) the object that will run in memory. The initialised object will have:

state: characteristics
behaviour: what can it do or what can it be done to it

Both the state and behaviour are modified through:

attributes: parameters that define the state of the object
methods: functions that define the behaviour of the object

### Encapsulation
Keyword: Private, Public, Protect.

### Abstraction
Keyword: abtract.

### Inheritance
Can Inheritance a "abtract" or multiple "interface" (depending on the language)

### Polymorphism
Keyword: Method Overriding, Method Overloading, Duck Typing (Method test it's type, interface, abstract,..)

# Engineering Principles

### Engineering Principles: SOLID (folder solid)
Priciple 5
- High-level modules should not import anything from low-level modules. Both should depend on abstractions (e.g., interfaces).
- Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

### Engineering Principles: Don’t Repeat Yourself (DRY)
### Engineering Principles: Keep It Simple Stupid (KISS)
### Engineering Principles: You Aren’t Gonna Need It (YAGNI)
YAGNI is about focusing on the problem at hand while (just like KISS) minimizing complexity. Focus on keeping things simple yet open to added complexity later on, use the open/closed principle.

### Engineering Principles: Avoid Premature Optimization (https://wiki.c2.com/?PrematureOptimization)
While we need to keep in mind optimization to avoid performance issues most likely you don't have to optimize that function and make it less readable.

### Engineering Principles: Principle Of Least Astonishment (https://en.wikipedia.org/wiki/Principle_of_least_astonishment)
POLA is about being boring. Make sure to not surprise the users or yourself both the code and the UX have to be consistent and predictable.

### Engineering Principles: Law of Demeter (https://en.wikipedia.org/wiki/Law_of_Demeter http://mi.codes/programming-principles-the-law-of-demeter-lod/)
![image](https://user-images.githubusercontent.com/32290857/166319143-14aa3695-b4d6-406b-a5e9-ce0e64415c56.png)

# OOP Modelling

### UML basics
### ERP Modal

# Design Patterns


