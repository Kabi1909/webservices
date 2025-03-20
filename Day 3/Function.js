//arrow function

const msg = ()=> {return console.log("Hello JS")}
msg()

//write an arrow function to sum 2 numbers 
const ans = ()=> {return console.log(5+3)}
ans()

const add =(a,b) =>{return a+b}
console.log(add(5,3))

//default parameter
const mul =(a,b=2) =>{return a*b}
console.log(mul(4,5))
console.log(mul(4))

//Rest parameter
 const mysum1 = (...n)=>{
	let t=0
	n.forEach((i)=>t =t+i)
	console.log(t)
	
}
mysum1(4,5,6,8,2) 

const mysum = (...n)=>{
	return n.reduce((t,i)=>t=t+i)
	
}
console.log(mysum(4,5,6,8,2))
console.log("\n")

//write a boolean function to find a given number in prime 
function prime(num)
{
	
	if(num <=1)
	{
		return false
	}
	for(let i=2;i<num;i++)
	{
		if(num %i ==0)
		{
			return false
		}
		else
		{
			return true
		}
	}
	
}
console.log(prime(5))
console.log("\n")


//callback function
//a function passed as an argument

const greet =(msg,fun) =>{
	console.log("Hi.."+msg)
	fun()
}
const myName =(name)=>{console.log("My name is "+name)}
greet("Good morning",()=>{console.log("My name is Rajeevni")})

const multtwo = (n)=>n*3

const myarr =(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multtwo,4,5,6,8,2)
console.log("\n")


//function

function PrintMsg()
{
	console.log("Hello JS")
}
PrintMsg()

//return type function
function sum()
{
	return 5+6
}
console.log(sum())

function sub(a,b)
{ 
	return a-b
}
console.log(sub(5,3))
