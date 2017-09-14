const myNum: number = 5;
const myString: string = 'Hello Universe';
const myArr: number[] = [1,2,3,4];
let myObj: object = {name: 'Billy'};
let anythingVariable: any = 'Hey';
anythingVariable = 25;
const arrayOne: boolean[] = [true, false, true, true];
const arrayTwo: any[] = [1, 'abc', true, 2];
myObj = {x: 5, y: 10};

// Object Constructor
class MyNode{
    val: number;
    _priv: number;

    constructor(value: number){
        this.val = 0;
        this.val = value;
    }
    doSomething(){
        this._priv = 10;
    }
}

let myNodeInstance = new MyNode(1);
console.log(myNodeInstance);

function myFunction(): void{
    console.log('Hello World');
    return;
}

function sendingErrors(): never{
    throw new Error('Error Message');
}
