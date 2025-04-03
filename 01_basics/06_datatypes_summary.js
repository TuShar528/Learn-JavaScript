// Primitive datatypes
//   called by call by value

//7 Types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 10
const myname = "Tushar"
let LoggedIn = true
let tempOutside = null
let state;
const id = Symbol('01')
const  newid= Symbol('01')
let newnumber = 2552555n

console.table([typeof score,typeof myname , typeof LoggedIn , typeof tempOutside , typeof state , typeof id,typeof newnumber])


// Reference (Non - Primitive) datatypes

// Object , function , array

const myarray = ["Tushar" , "Ansh" , "Amit"]
let obj = {
    nyname : "Raj",
    rollno : '01',
}
let myfunction = function(){
    console.log("Hello world")
}

console.table([typeof myarray , typeof obj , typeof myfunction])


// checking if symbol datatype is working 
console.log(id == newid)  // gives false means symbol gives make  variable unique 