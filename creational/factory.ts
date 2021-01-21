export abstract class AbstractFactory {
    abstract getLeft()
    abstract getRight()
}

export class FactoryMethod extends AbstractFactory {
    getLeft(){
        return Left
    }
    getRight(){
        return Right
    }
}

class Left {
    constructor(parameters) {
        
    }
}

class Right {
    constructor(parameters) {
    }
}

//*Factory Method
// use Class to Create a product

//*Abstract Factory 
// use object (instance) to create one or multi product