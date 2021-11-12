function* MyTestFn(){            
    var a = yield(100);
    console.log(a);
    a = yield(a*2);
    console.log(a);
    return a*2;
}

const myTestFn = MyTestFn();
var res = myTestFn.next();
console.log(res);
res = myTestFn.next(500);
console.log(res);
res = myTestFn.next(1000);
console.log(res);



const target = {};
const handler = {
    /** Intercepts: getting properties */
    get(target, propKey, receiver) {
        console.log(`GET ${propKey}`);
        return 123;
    },

    /** Intercepts: checking whether properties exist */
    has(target, propKey) {
        console.log(`HAS ${propKey}`);
        return true;
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo);
console.log('hello' in proxy);

function X(){
    this.sayHi = function() {
        console.log("Hello world!");
    }
}

var x = new X();
x.sayHi();

const XHandler = {
    sayHi() {
        console.log("Hello there!");
    }
}


var x1 = new Proxy(X, XHandler);
console.log(new x1());
new x1().sayHi();
