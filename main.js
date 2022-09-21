console.log("JS is started");

// compare operators 
// console.log( 5 < 5 );
// console.log( 5 <= 5 );
// console.log( 12 == 12 );
// console.log( "8" == 8 );
// console.log( "8" === 8 );
// console.log( "8" === 8 );
// console.log( "salom" === "salom" );


if( 5 < 6){
    console.log("ha");
}else{
    console.log("yoq");
}


console.log( 5 === 5 ); // true
console.log( 5 !== 5 ); // true
console.log( 10 !== 10 ); //false



let age = 22
// && - and (va)

let result = age >= 18 && age <= 25

if(result){
    console.log("acsess");
}else{
    console.log("cannot acsess");
}

let weather = 25
// || -> yoki 
let foo = weather < -5 || weather > 45
console.log( foo );

let sana = new Date()
const time = document.querySelector(".time")

let soat = sana.getHours()
let daqiqa = sana.getMinutes()
let soniya  = sana.getSeconds()
let timeFormat = `${soat} ${daqiqa} ${soniya}`
console.log(timeFormat);

console.log( sana.getFullYear() );
console.log( sana.getMonth()+1  );
console.log( sana.getDate() );
console.log( sana.getDay() );
console.log( sana.getHours() );
console.log( sana.getMinutes() );

