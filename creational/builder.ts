
interface ISeat {

}

interface ICar{
    color: string
    seat: ISeat
}

class Car implements ICar {
    color: string
    seat: ISeat

    constructor(props: ICar){
        const {color, seat} = props
        this.color = color
        this.seat = seat
    }

    get() {
        console.log('get car')
    }

    set() {
        console.log('set car')
    }

}

type IBuilder =  ICar & {
    Build: () => Car
    setColor: (any) => Builder
    setSeat: (any) => Builder
}

export class Builder implements IBuilder{
    color: string
    seat: ISeat

    setColor(color){
        this.color = color
        return this
    }

    setSeat(seat){
        this.seat = seat
        return this
    }

    Build(): Car{
        return new Car({color: this.color, seat: this.seat})
    }
    
}