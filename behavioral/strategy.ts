interface IPromotionStrategy{
    DoDiscount: (number) => number
}

export class NoDiscount implements IPromotionStrategy {
    DoDiscount(price: number){
        return price
    }
}

export class HalfDiscount implements IPromotionStrategy {
    DoDiscount(price: number){
        return price/ 2
    }
}

abstract class AbstractTicket {
    abstract setPromoteStrategy(promotionStrategy: IPromotionStrategy):void
    abstract setPrice(price: number):void
    abstract getPromotePrice():number
}

export class Ticket extends AbstractTicket{
    private _price: number
    private _promoteStrategy: IPromotionStrategy


    constructor(promotionStrategy?:IPromotionStrategy ){
        super();
        if(promotionStrategy) this._promoteStrategy = promotionStrategy
    }

    setPromoteStrategy(promotionStrategy: IPromotionStrategy){
        this._promoteStrategy = promotionStrategy
    }

    setPrice(price: number) {
        this._price= price
    }

    getPromotePrice(){
        return this._promoteStrategy.DoDiscount(this._price)
    }
}


const ticketA = new Ticket(new HalfDiscount())
const ticketB = new Ticket(new NoDiscount())
