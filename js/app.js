//Section 1

//1.
const arrObj = {
	arr: [1,2,3],
	isObj: true
}
console.log(arrObj.arr[1]);

//2.
const objObj = {
	obj: {
		isObj: true,
		properties: 2
	},
	isObj: true
}
console.log(objObj.obj.isObj);

//4.
const objArr = [4,{
	isObj: true,
	properties: 2
}]
console.log(objArr[1].isObj);

//Section 2

//1.
const objFunc = () => {
	return {
		isObj: true,
		properties: 2
	};
}
console.log(objFunc().isObj);

//2.
const arrFunc = () => {
	return [1,2,3];
}
console.log(arrFunc()[0]);

//3.
const arrObjFunc = () => {
	return {
		isObj: true,
		arr: [1,2,3]
	}
}
console.log(arrObjFunc().arr[0]);

//Section 3

const cbFunc1 = () => {
	console.log("Hello");
}

const cbFunc2 = (param) => {
	return param;
}

cbFunc2(cbFunc1());

//Section 4
if(true){
	const a = 2 + 2;
	console.log(a);
}

if(true){
	if(false){
        console.log('hi');
    }
}

//Section 5
const numList = [2,4,6,8,10];

//Section 6
const bar = ()=>{
    console.log('bar here');
}
bar();

const foo = ()=>{
    console.log('foo here');
}
foo();

//Section 7
//Defines function with two parameters
const addTwoNums = (firstNum, secondNum)=>{
	//declares new variable, assigns variable value of sum of function's arguments
    const finalValue = firstNum + secondNum;
    //returns new variable
    return finalValue;
}

//Section 8
foo();

const foo ()=>{
    console.log('hi');
}
//The error message means that the function declaration is missing an equals sign

//Section 9
const b = 5;

if(b === 5){ //will be false
    console.log('this line should execute');
}

const a = '5';
console.log(5 + Number(a));




