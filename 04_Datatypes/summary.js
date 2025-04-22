//  Primitive Datatypes => 7

//String, Number, Boolean, Null, Undefined, Symbol, BigInt

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId);

const bigNumber = 4727589978472857287528783842n

console.log(typeof bigNumber);


//Reference(Non-Primitive Datatypes) 

//Array, Objects, Functions

const heros = ["Hulk", "Spiderman", "Ironman"];

let myObj = {
    name:"Adnan",
    age:22,
    designation:"Software Developer"
}

const myFunction = function(){
    console.log("Hello");
    
}

console.log(typeof myObj);
