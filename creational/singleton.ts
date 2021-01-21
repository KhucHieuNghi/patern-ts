export class SingleTon {
    private static instance: SingleTon;
    private constructor() {}

    static getInstance():SingleTon {
        if(SingleTon.instance) return SingleTon.instance
        return new SingleTon()
    }

    get(){
        console.log('get SingleTon')
    }

    set(){
        console.log('set SingleTon')
    }
}

// way 2

