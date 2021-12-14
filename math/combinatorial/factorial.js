/* Crie um algoritimo que calcule o fatorial de um número inteiro positivo*/

function factorial(n){

	if(n < 0 ) throw new Error ("Somente números positivos");

	if(n === 1 && n === 0){
		console.log(1);
	}

	let arr = [];	
	for(let i = n; i > 0; i--){
		arr.push(i);		
	}
	console.log(arr.reduce((item, arr) => item*arr, 1));
}

try{
	factorial(5);
	factorial(1);
	factorial(0);
	factorial(-5);
}catch(error){
	console.log('Insira somente números positivos!');
}


/*
fac (n){	
	if( n <= 1 ){
		return 1;
	}
	else{
	return n*fac(n-1);
	}
}
*/

