
const myButton = document.getElementById('button');
const myDiv = document.getElementById('my_div');


var a = null;

let b; // создание переменной

b = 25;

const c = 30; // инициализация переменной


let result = 2 / 2 * 2;

let text = 'my first text in JS';

b++; 			// b = b + 1;
b += 3; 	// b = b + 3;

b--;			// b = b - 1;

let firstTrue = true; // boolean
let firstFalse = false;

const name = "Bogdan";
const age = 13;

// console.log( 'Hello, my name is ' + name + ' Im ' + age + ' years old' );

// console.log( `Hello, my name is ${name} Im ${age} years old` ); 						// ES6, интерполяция


const num = b + c; // 58

// console.log(num);


// if ( 20 >= 58 ) {

// 	console.log(' num меньше чем 58 '); // true

// } else { // num < 58
	
// 	console.log(' num большe чем 58 '); // false	

// }


// 	ЦИКЛЫ

 // 1 - WHILE

let i = 0;

while( i < 5 ) {
	// console.log( i );
	i++;
}

console.log(` last i = ${i}`);


// 2 - DO ... WHILE


let j = 0;

do {
	// console.log( j );
	j++;
} while ( j < 7 )

// console.log( ` last j = ${j}` );


// 3 - FOR

for ( let k = 0; k < 10; k++ ) {
	if ( k%2 !== 1 ) break;
	console.log(k);
}


let num1 = 10, num2 = '10';

// console.log( num1 === num2 );



// FUNCTIONS 


// FUNC DECORATION


// console.log( mult1(44, 112) );


function mult1 ( num1, num2 ) {
	return num1 * num2;
}

// FUNC EXPRESSION


const mult2 = function ( num1, num2 ) {
	return num1 * num2;
}

// console.log( mult2(44, 112) );


// ARROW FUNCTION

const mult3 = ( num1, num2 = 10 ) => num1 + num2;


// console.log( mult3( 15 ) );


// PREDICATE FUNCTIONS

const predicate = ( num ) => num%2 === 0;

// console.log( predicate( 21 ) );


let arr = [ 1, 4, true, 34, false, '435', 'string', undefined, null, NaN ];

// console.log( arr[ arr.length - 1 ] );

for ( let i = 0; i < arr.length; i++ ) {

	console.log( arr[ i ] );

	/*
	arr[0]
	arr[1]
	arr[2]
	arr[3]
	...

	arr[arr.length - 1]

	arr[10] = undefined !!

	*/

}

console.clear();


let arr2 = [2, 3, 4, 1, 8, 10];


const multArr = (array) => {

	let newArr = [];

	for (let el = 0; el < array.length; el++) {
		newArr[el] = array[el] * 2;
		/*
		newArr[0] = arrray[0] * 2 // 4
		newArr[1] = arrray[1] * 2 // 6
		newArr[2] = arrray[2] * 2 // 8
		...
		*/
	}
	return newArr;
}

// console.log( arr2,  multArr( arr2 ) );


let myRandArr = new Array(0);

// let myRandArr = [];

for (let num = 0; num < 15; num++) {
	
	const rand = Math.round(Math.random() * 100);

	myRandArr[num] = rand;

	// if (rand % 2 == 0) {
	// 	myRandArr[num] = rand;
	// } else {
	// 	myRandArr[num] = 'nechetnoe';
	// }

}

// console.log( myRandArr );

let ar = ['a', 'b', 'c']; // ar[ar.length - 1]

let br = [1, 2, 3, 34, 5, 345, 35, 3, 45, 345, 34, 5345];

// console.log( concat(ararar, brarar) );

/*

Написать функцию которая принимает на вход 2 массива и возвращает один "склеенный" массив из двух


*/

const reverse = ( arr ) => {
	// const newArr = [];
	const newArr = new Array(0);
	for (let i = 0; i < arr.length; i++) {
		newArr[i] = arr[ arr.length - 1 - i ];
	}
	return newArr;
}

// console.log( reverse(br) );


const concat = (arr1, arr2) => {

	for (let i = 0; i < arr2.length; i++) {

		arr1[ arr1.length ] = arr2[i];

	}
	return arr1;

}

// console.log( concat(ar, br) );


const min = (num1, num2) => num1 > num2 ? num1 : num2;

// console.log( min( 66, 21 ) );	

const pow = (x, n) => {

	// x * x * x ... n - раз

	let result = 1;

	for (let i = 0; i < n; i++) {

		result *= x;
		// result = result * x;

	}

	return result;
}

// console.log( pow(12, 2) );

const aaa = 12;
const bbb = 3;

// console.log( aaa%bbb === 0 ? 'Делится' : 'Делится с остатком' );

let arrCube = [4, 2, 5, 19, 13, 0, 10];

let summ = 0;

for (let i = 0; i < arrCube.length; i++) {

	arrCube[i] = Math.pow(arrCube[i], 3);

	summ += arrCube[i];

}

const summSQRT = Math.sqrt(summ);

// console.log(arrCube, summ, summSQRT);

// console.log( Math.ceil( 4.0000001 ) );
// console.log( Math.floor( 3.9999999 ));


// 3.14159....


console.log( arrCube );

arrCube.shift(); // удаление первого элемента массива

console.log(arrCube);

arrCube.unshift('added by unshift');

console.log(arrCube);

arrCube.pop(); // удаляет элемент с конца массива

console.log(arrCube);

arrCube.push('added by push');

console.log(arrCube);

console.clear();


/////////////////////////////////////////////////////
// MAP

const newArrCube = [4, 2, 5, 19, 13, 0, 10];

const resultMap = newArrCube.map( (value, idx, arr) => { // callback

	// console.log( `Value is ${value}, on index ${idx} of array ${arr}`);

	return value = Math.pow( value, 3 );

});

const pow2 = newArrCube.map( val => val * 2 );

console.log(newArrCube, pow2);

/////////////////////////////////////////////////
// FILTER

const arrNumStr = [1, 67, 324, 6, 8, 34, 57, 89, 32];

const predicate2 = value => value > 50;

const arrNum = arrNumStr.filter(predicate2);

console.log(arrNum);

////////////////////////////////////////////////
/// FILL

const idxPlusOne = (i, idx) => i = idx + 1;

let aaaaa = new Array(5).fill('').map(idxPlusOne).reverse();

console.log( aaaaa );

/////////////////////////////////////////////////
// CONCAT

const summOfArrs = aaaaa.concat(arrNum, ...[3,3,3,3]);
console.log(aaaaa, arrNum, summOfArrs);


///////////////////////////////////////////////////////////
// SLICE - копирует массив в указанных промежутках

const slicePartOfArr = summOfArrs.slice(3, 8);

console.log(slicePartOfArr);

////////////////////////////////////////////////////////////
//SPLIT


const hash = (name, surename) => {

	const arrArar = ['#', name, '-', surename].join('');

	return arrArar;

}

const revString = (name, surename) => {

	const arrName = name.split('').reverse().join('');

	const arrSurename = surename.split('').reverse().join('');

	const arrArar = ['#', arrName, '-', arrSurename].reverse().join('');

	return arrArar;
}

console.log( revString('Bogdan','Klimov') ); 	// vomilK-nadgoB#

console.clear()


//////////////// OBJECTS ///////////////////////////////////////////////////////////

function returnAge () {
	console.log(`I am ${this.age} y.o.`);
}

const obj = {
	name: 'Bogdan',
	surename: 'Klimov',
	age: 22,
	'111': 'num',
	isGoingToSchool: true,
	totalMarks: [9, 10, 8, 12],
	newKey: 'someVal',
	sayHi: function () {
		console.log(`Hi, my name is ${ this.name }`)
	},
	'how old are you': returnAge
}

const obj2 = new Object({
	// name: 'Petya',
	surename: 'Pupkin',
	// age: 20,
	'new key obj2': 'val obj 2'
})

// console.log( obj.name + obj.surename  );

// obj['name'] = 'Vasya';

obj['totalMarks'][2] = 8;

console.log(obj.newKey);

delete obj.newKey

console.log(obj.newKey);

obj.placeOfBirth = 'Cherkassy';

console.log( obj );

// console.log( obj['how old are you'] );

obj['something key'] = 'someth value';

for( let key in obj ) {
	console.log( `Key name is ${key}, Its value : ${ obj[key] }` ); // возвращает в виде строки поля и значения полей объекта obj
}

const obj3 = {
	'is a good key?': true
}

console.log(	Object.assign(obj, obj2, obj3)  );

console.log( Object.keys(obj) );

console.log( Object.values(obj) );

console.log( Object.entries(obj) ); 

//////////////////////////////////////////////


console.clear();

const car = 'Audi';
const model = 'A6';
const year = 2000;
const mileage = 1e4;

const newObj = { car, model, year, mileage }; // вариант записи объекта, если имя переменной совпадает с именем ключа

// console.log( newObj );

const town = {

	nameTown: 'Istanbul',
	population: 6e6,
	language: 'Turkish',

}

const { nameTown, population, language } = town; 	// деструктуризация

const sportsman = {
	name: 'John Senna',
	place: 'armrestling',
	age: 40,
	money: 2300,
	country: 'USA'
}

/*

	const nameTown = town.nameTown
	const population = town.population
	conts language = town.language

*/

// console.log( nameTown, population, language );

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

const sum = (obj) => {

	let summ = 0;
	for (let key in obj) {
		summ = summ + obj[key];
	}
	console.log(summ);
}


// sum(salaries);

///////////////////////////////////////////////////////////////////////////////////////////////////////

let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

// menu.width = menu.width * 2;

console.log( menu );

const multiplyNumeric = (obj) => {


	for (let key in obj) {

		if (typeof obj[key] === 'number') {
			obj[key] = obj[key] * 2;
		}

	}

}

multiplyNumeric(menu);

// console.log( menu );

/////////////////////////////////////////////////////////////////////////////////////////////////

const initValue = 0;

// const d2 = [45, 78, 10, 3].reduce( (prevValue, currValue, index, array) => {
// 	console.log(
// 		` prevValue: ${prevValue}
// 			currValue: ${currValue}
// 			index: ${index}
// 			array: ${array}
// 			initValue: ${initValue}
// 		`
// 	);

// 	return prevValue + currValue;

// }, initValue);


// d2.forEach(i => summa += i);

// console.log(d2);

console.clear();

class CreateCountry {
	
	constructor(id, country, population) {
		this.id = id;
		this.country = country;
		this.population = population;
	}

	myCountry () {
		return `Hello, Im from ${this.country}, my population: ${this.population}`
	}

}

CreateCountry.prototype = {
	sell: this.country
}

const ukraine = new CreateCountry('UA', 'Ukraine', 4e7);
const albania = new CreateCountry('AL', 'Albania', 2986952);

console.log(ukraine, albania);



const NewConstructorFunc = function () {
	this.name = 'Vasya';
}


class NewConstructorFuncByClasses {

	constructor() {
		this.name = 'Vasya';
	}

	showName(str) {
		return this.name + ' ' + str
	}

}


const newVasya = new NewConstructorFuncByClasses;

////////////////////////////// CLASSES ////////////////////////////

class CreateCountryByClass {

	constructor( id, country, population ) {
		this.id = id;
		this.country = country;
		this.population = population;
	}

	myCountry () {
		return `Hello, Im from ${this.country}, my population: ${this.population}`
	}

}

CreateCountryByClass.prototype.returnCountry = function() {return this.country}

const germany = new CreateCountryByClass('GR', 'Germany', 86e6);

console.log(germany);

////////////////////////////////////////////

class Worker {

	constructor(name,surename,rate,days) {
		this.name = name;
		this.surename = surename;
		this.rate = rate;
		this.days = days;
	}

	getSalary () {
		// зарплата
		return this.rate * this.days;
	}

	get summ() {
		return this.days;
	}

	set summ(value) {
		this.days = value;
	}

}

const worker1 = new Worker('Иван', 'Иванов', 10, 31);
const worker2 = new Worker('Сидор', 'Сидоров', 34, 16);

// console.log( `Salary: ${worker1.getSalary() + worker2.getSalary()}` );

const animalObj = {
	skinColor: 'grey',
	eyesColor: 'green'
}

const mammals = {
	legs: 4,
	__proto__: animalObj
}

const myDog = {
	name: 'Sharik',
	isBark: true,
	__proto__: mammals
}


// console.log(mammals);

class Animal {
	constructor(skinColor, eyesColor) {
		this.skinColor = skinColor;
		this.eyesColor = eyesColor;
	}

	getFirstProps() {
		return `Props: ${this.skinColor}, ${this.eyesColor}`
	}

}


class Mammals extends Animal {

	constructor(legs) {
		super(); // наследует конструктор родительского класса
		this.legs = legs;
	}

	getSecondProps() {
		return `Mammals & Animals Props: ${this.skinColor}, ${this.eyesColor}, ${this.legs}`
	}
	
}

class Dog extends Mammals {

	constructor(name, isBark) {
		super();
		this.name = name;
		this.isBark = isBark;
	}

	getParentProps() {
		return super.getSecondProps()
	}

}

const newDog = new Dog('Sharik', true);

newDog.skinColor = 'grey',
newDog.eyesColor = 'green',
newDog.legs = 4,

console.log(newDog);

console.clear();


////////////////////////////////////////////////////////////////

const ulGet = document.getElementById('ul');
const ulQuery = document.querySelector('#ul');

const liGet = document.getElementsByClassName('li');
const liQuery = document.querySelectorAll('.li');

const div = document.getElementById('div');


// console.log(liGet, liQuery);

const newDiv = document.createElement('div');
newDiv.innerText = 'second div';
div.append(newDiv);

const link = document.createElement('a');
link.setAttribute('href', '#');
link.innerText = 'new link';

div.prepend(link);

// link.remove();

const cloneDiv = div.cloneNode(false);
document.body.append(cloneDiv);




// div.onclick = clickFunc;

const input = document.createElement('input');
const submit = document.createElement('input');
const form = document.createElement('form');
const span = document.createElement('span');
const el = document.createElement('span');
// const ul = document.createElement('ul');

// div.append(form);
div.append(input);
div.append(submit);
div.append(span);

input.setAttribute("name", "my_input");
input.setAttribute("value", "");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "click");



const clickFunc = () => {

	console.log('text22');

};



input.onclick = () => console.log('text');

input.onclick = clickFunc;

el.innerText = 'new span';

div.append(el);


// ulQuery.style.height = '1000px';




const scrollBgrnd = () => {
	if (window.scrollY > 120) {
		ulQuery.style.backgroundColor = 'red';
	} else ulQuery.style.backgroundColor = 'white';
}

// window.addEventListener('scroll', scrollBgrnd);

// slider!

const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const slider  = document.getElementById('slider');
const sliderEls = document.getElementsByClassName('slider-el');
const visibleWindow = document.getElementById('visible-window');


let step = 0;
const move = slider.offsetWidth / sliderEls.length;
const rightBorder = visibleWindow.offsetWidth - slider.offsetWidth;
const leftBorder = 0;

const moveLeft = () => {
	step += move;
	if (step > leftBorder) {
		step = rightBorder;
	}
	slider.style.left = step + 'px';
}

const moveRight = () => {

	step += -move;

	if (step < rightBorder) {
		step = leftBorder;
	}

	slider.style.left = step + 'px';

}

leftBtn.onclick = moveLeft;
rightBtn.onclick = moveRight;
