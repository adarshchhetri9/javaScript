let arrayone = [1, 2, 3];

class userName {
    constructor(name, count) {
        this.name = name;
        this.count = count;
        this.getCrouseCount = function () {
            console.log(`The crouse count is ${this.count}`);
        };
    }
}

let userOne = new userName("Adarsh", 7)
userOne.getCrouseCount();