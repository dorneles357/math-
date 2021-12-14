let f = (x) =>{
	return Math.E**(-x) - x;
}

let method_sec = (x_i, xi) =>{
	return xi -1*(f(xi)*(xi - x_i))/(f(xi) - f(x_i));
}

/*Primeira iteração*/
console.log(f(0.5))
console.log(f(0.6))
console.log(method_sec(0.5,0.6).toFixed(3))

/*Critério de parada*/
console.log(Math.abs((f(method_sec(0.5, 0.6)))));
