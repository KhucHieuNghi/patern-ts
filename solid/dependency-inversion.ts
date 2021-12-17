// *Mỗi thành phần hệ thống (class, module, …) chỉ nên phụ thuộc vào các abstractions, không nên phụ thuộc vào các concretions hoặc implementations cụ thể.

// Add log when increment count

class Log {
    logFile() {
        //
    }
}

// Case
class Duck {
    count: number = 0;
    add(){
        this.count += 1;

        // func add Duck đang phụ thuộc vào class Log
        const log  = new Log();
        log.logFile()

    }
}

//Solution

class DuckS {
    count: number = 0;
    log: Log
    add(){
        this.count += 1;
    }
    setLog(log: Log){
        this.log = log
    }
    getLog(){
        return this.log;
    }

    writeLog(){
        this.log.logFile()
    }
}

// -> Giao việc control log cho instance
const instance = new DuckS()
instance.setLog(new Log())
// first away
instance.writeLog()

// 2nd way
const log = instance.getLog()
log.logFile()