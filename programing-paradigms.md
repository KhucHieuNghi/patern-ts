# Popular programing paradigms

## Imperative Programming
Imperative programming consists of sets of detailed instructions that are given to the computer to execute in a given order. 
It's called "imperative" because as programmers we dictate exactly what the computer has to do, in a very specific way.

Imperative programming focuses on describing how a program operates, step by step.

Say you want to bake a cake. Your imperative program to do this might look like this (I'm not a great cook, so don't judge me 😒):

1- Pour flour in a bowl
2- Pour a couple eggs in the same bowl
3- Pour some milk in the same bowl
4- Mix the ingredients
5- Pour the mix in a mold
6- Cook for 35 minutes
7- Let chill
Using an actual code example, let's say we want to filter an array of numbers to only keep the elements bigger than 5. Our imperative code might look like this:

const nums = [1,4,3,6,7,8,9,2]
const result = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) result.push(nums[i])
}

console.log(result) // Output: [ 6, 7, 8, 9 ]
See that we're telling the program to iterate through each element in the array, compare the item value with 5, and if the item is bigger than 5, push it into an array.

We're being detailed and specific in our instructions, and that's what imperative programming stands for.****

## Procedural programming
Procedural programming is a derivation of imperative programming, adding to it the feature of functions (also known as "procedures" or "subroutines").

In procedural programming, the user is encouraged to subdivide the program execution into functions, as a way of improving modularity and organization.

Following our cake example, procedural programming may look like this:

function pourIngredients() {
    - Pour flour in a bowl
    - Pour a couple eggs in the same bowl
    - Pour some milk in the same bowl
}

function mixAndTransferToMold() {
    - Mix the ingredients
    - Pour the mix in a mold
}

function cookAndLetChill() {
    - Cook for 35 minutes
    - Let chill
}

pourIngredients()
mixAndTransferToMold()
cookAndLetChill()
You can see that, thanks to the implementation of functions, we could just read the three function calls at the end of the file and get a good idea of what our program does.

That simplification and abstraction is one of the benefits of procedural programming. But within the functions, we still got same old imperative code.

## Functional programming
Functional programming takes the concept of functions a little bit further.

In functional programming, functions are treated as first-class citizens, meaning that they can be assigned to variables, passed as arguments, and returned from other functions.

Another key concept is the idea of pure functions. A pure function is one that relies only on its inputs to generate its result. And given the same input, it will always produce the same result. Besides, it produces no side effects (any change outside the function's environment).

With these concepts in mind, functional programming encourages programs written mostly with functions (surprise 😲). It also defends the idea that code modularity and the absence of side effects makes it easier to identify and separate responsibilities within the codebase. This therefore improves the code maintainability.

Going back to the array filtering example, we can see that with the imperative paradigm we might use an external variable to store the function's result, which can be considered a side effect.

const nums = [1,4,3,6,7,8,9,2]
const result = [] // External variable

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) result.push(nums[i])
}

console.log(result) // Output: [ 6, 7, 8, 9 ]
To transform this into functional programming, we could do it like this:

const nums = [1,4,3,6,7,8,9,2]

function filterNums() {
    const result = [] // Internal variable

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 5) result.push(nums[i])
    }

    return result
}

console.log(filterNums()) // Output: [ 6, 7, 8, 9 ]
It's almost the same code, but we wrap our iteration within a function, in which we also store the result array. In this way, we can assure the function doesn't modify anything outside its scope. It only creates a variable to process its own information, and once the execution is finished, the variable is gone too.

## Declarative programming
Declarative programming is all about hiding away complexity and bringing programming languages closer to human language and thinking. It's the direct opposite of imperative programming in the sense that the programmer doesn't give instructions about how the computer should execute the task, but rather on what result is needed.

This will be much clearer with an example. Following the same array filtering story, a declarative approach might be:

const nums = [1,4,3,6,7,8,9,2]

console.log(nums.filter(num => num > 5)) // Output: [ 6, 7, 8, 9 ]
See that with the filter function, we're not explicitly telling the computer to iterate over the array or store the values in a separate array. We just say what we want ("filter") and the condition to be met ("num > 5").

What's nice about this is that it's easier to read and comprehend, and often shorter to write. JavaScript's filter, map, reduce and sort functions are good examples of declarative code.

Another good example are modern JS frameworks/libraries like React. Take this code for example:

<button onClick={() => console.log('You clicked me!')}>Click me</button>
Here we have a button element, with an event listener that fires a console.log function when the button is clicked.

JSX syntax (what React uses) mixes HTML and JS in the same thing, which makes it easier and faster to write apps. But that's not what browsers read and execute. React code is later on transpiled into regular HTML and JS, and that's what browsers run in reality.

JSX is declarative, in the sense that its purpose is to give developers a friendlier and more efficient interface to work with.

An important thing to notice about declarative programming is that under the hood, the computer processes this information as imperative code anyway.

Following the array example, the computer still iterates over the array like in a for loop, but as programmers we don't need to code that directly. What declarative programming does is to hide away that complexity from the direct view of the programmer.

Here's a nice comparison between imperative and declarative programming. https://www.youtube.com/watch?v=E7Fbf7R3x6I

## Object-oriented programming
One of the most popular programming paradigms is object-oriented programming (OOP).

The core concept of OOP is to separate concerns into entities which are coded as objects. Each entity will group a given set of information (properties) and actions (methods) that can be performed by the entity.

OOP makes heavy usage of classes (which are a way of creating new objects starting out from a blueprint or boilerplate that the programmer sets). Objects that are created from a class are called instances.

Following our pseudo-code cooking example, now let's say in our bakery we have a main cook (called Frank) and an assistant cook (called Anthony) and each of them will have certain responsibilities in the baking process. If we used OOP, our program might look like this.

// Create the two classes corresponding to each entity
class Cook {
	constructor constructor (name) {
        this.name = name
    }

    mixAndBake() {
        - Mix the ingredients
    	- Pour the mix in a mold
        - Cook for 35 minutes
    }
}

class AssistantCook {
    constructor (name) {
        this.name = name
    }

    pourIngredients() {
        - Pour flour in a bowl
        - Pour a couple eggs in the same bowl
        - Pour some milk in the same bowl
    }
    
    chillTheCake() {
    	- Let chill
    }
}

// Instantiate an object from each class
const Frank = new Cook('Frank')
const Anthony = new AssistantCook('Anthony')

// Call the corresponding methods from each instance
Anthony.pourIngredients()
Frank.mixAndBake()
Anthony.chillTheCake()
What's nice about OOP is that it facilitates the understanding of a program, by the clear separation of concerns and responsibilities

src: https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/#imperative-programming
