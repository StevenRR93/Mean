var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];
var myObj: object = { name:'Bill'};
var anythingVariable: any = "Hey";
anythingVariable = 25; 
var arrayOne: boolean[] = [true, false, true, true]; 
var arrayTwo: any[] = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
class MyNode {
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
console.log(myNodeInstance.val);
function myFunction(val: string): void {
    console.log(val);
    return;
}
function sendingErrors(message: string): never {
	throw new Error(message);
}