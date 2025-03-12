let num1 = 10;
let num2 = 20;

let sum = num1+num2;
let mul = num1*num2;
let div = num1/num2;
let sub = num1-num2;

console.log("Sum: " + sum);
console.log("Multiplication: " + mul);
console.log("Division: " + div);
console.log("Substraction: " + sub);

var x = 20
var x = 30 //var use last defined variable
var y = 52

console.log(x+y)
console.log("\n")

//Print numbers from 1 to 10
for(let i=1; i<=10; i++){
	console.log(i)
}
console.log("\n")
//Print only odd Numbers 
for(let i=1; i<=10; i++){
	if(i%2 == 1)
	{
		console.log(i)
	}
}
console.log("\n")

//Print the numbers in reverse
for(let i=10; i>=1; i--){
	console.log(i)
}
console.log("\n")

//Reverse the numbers in left and right 4321-5-9876
//7654321-8-15 14 13 12 11 10 9

var n = 10
var i = 4
while(i<n/2 && i>=1)
{
	console.log(i)
	i--
}
console.log("\n")
console.log(n/2)
console.log("\n")

var j = 9
while(j>n/2)
{
	console.log(j)
	j--
}

