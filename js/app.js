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