//* Các instance của lớp con có thẻ thay thế được các instance của lớp cha mà vẫn đảm bảo tính đúng đắn của chương trình

// Context 
// -> Tính đúng đúng đắn của chương trình: Các phương thức hoặc thuộc tính trong instance được define và sử dụng ở bất kì nơi nào khác rất khó kiểm soát nếu chỉ sử dụng kế thừa

// Result: Nên được báo lỗi trong quá trình biên dịch.

// Tech: Luôn implements từ 1 Interface

// Error
abstract class Duck {
    doSwim () {}
}

class DuckA extends Duck {
    doSwim() {
        // duckA
    }
}

class DuckB extends Duck {
    doSwim() {
        // duckB
    }
}

class DuckC extends Duck { // Vịt cao su không có chức năng bơi nhưng vẫn có thuộc tính của Duck (vịt)
    doSwim() {
        new Error('Nó không biết bơi!')
    }
}

class Ducks {
    items: [Duck];
    add(item: Duck){
        this.items.push(item)
    }
    get(index: number){
        return this.items[index]
    }
}

const instance: Ducks  = new Ducks();

instance.add(new DuckA)
instance.add(new DuckB)
instance.add(new DuckC)


instance.items.map(item => item.doSwim()); // crash app có con vịt cao su không biết bơi ở trong này

// Solution

interface IDuck {
    doSwim: () => void
}

class DuckSA extends Duck implements IDuck {
    doSwim() {
        // duckA
    }
}

class DuckSB extends Duck implements IDuck {
    doSwim() {
        // duckB
    }
}

class DuckSC extends Duck { // Vịt cao su không có chức năng bơi nhưng vẫn có thuộc tính của Duck (vịt) và không có đặc tính bay
}

class DucksS {
    items: [Duck];
    add(item: IDuck){ // instead Interface
        this.items.push(item)
    }
    get(index: number){
        return this.items[index]
    }
}

const instanceS: DucksS  = new Ducks();

instance.add(new DuckA)
instance.add(new DuckB)
instance.add(new DuckC) // Báo lỗi sau khi biên dịch


instance.items.map(item => item.doSwim()); // crash app có con vịt cao su không biết bơi ở trong này






