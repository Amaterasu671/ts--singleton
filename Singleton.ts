class SingletonClass {
    private static instance: SingletonClass;
    private constructor() {
    }
    static getInstance() {
        if (!SingletonClass.instance) {
            SingletonClass.instance = new SingletonClass();
        }
        return SingletonClass.instance;
    }
}

let instance1 = new SingletonClass() // This gives compilation error

let instance2 = SingletonClass.getInstance()
let instance3 = SingletonClass.getInstance()

console.log(instance2==instance3) // true
