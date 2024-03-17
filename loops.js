//for loop
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;

//for in loop
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("forin").innerHTML = txt;

//while loop
let z = "";
let i = 0;
while (i < 10) {
  z += "<br>The number is " + i;
  i++;
}
document.getElementById("while").innerHTML = z;

//do while loop
let b = ""
let c = 0;

do {
  b += "<br>The number is " + c;
  c++;
}
while (c < 10);  

document.getElementById("do-while").innerHTML = b;
//for of loop, looping over an array
const cars = ["BMW", "Volvo", "Mini"];

let m = "";
for (let x of cars) {
  m += x + "<br>";
}

document.getElementById("for-of").innerHTML = m;
// i=i+1;
// total=total+1;
// i++;
// total++;














