interface IAbstractPrototype {
    name: string
}

type IPrototype = IAbstractPrototype & {
    item?: any
}

abstract class AbstractPrototype {
    constructor(parameters: IAbstractPrototype) {
    }

    abstract clone(): AbstractPrototype
}

class Prototype extends AbstractPrototype {
    constructor(parameters: IPrototype) {
        super(parameters)
    }

    clone(){
        return new Prototype({name: 'prototype'} as IAbstractPrototype)
    }
}