let age = 18
console.log(typeof age)  // output number

let newAge = "25ss"
console.log(typeof newAge) //output string

let NumbernewAge = Number(newAge)
console.log( typeof NumbernewAge)  //output number But...

console.log(NumbernewAge)  //output is NaN(not a number)

let loggedIn = 1                    //type is number
let BooleanloggedIn = Boolean(loggedIn)
console.log(typeof BooleanloggedIn) //output boolean
console.log(BooleanloggedIn)        //output true

let StringloggedIn = String(loggedIn)
console.log(typeof StringloggedIn)   //output string
console.log(StringloggedIn)          //output 1


