
let f = (x) =>{
	return Math.E**(-x) - x;	
}

let der_f = (x) =>{
	return -1*Math.E**(-x) - 1
}

let method_NH = (x) =>{
	return x - (f(x)/der_f(x));
}

console.log(1)
console.log(1)
console.log(method_NH(1))
console.log(method_NH(0.5378))
