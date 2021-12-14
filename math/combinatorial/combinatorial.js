/*Algoritmo que faça a combinação n a r ordenadamente*/

function com_nxr(n, r){
	if(n !== parseInt(n) || r !== parseInt(r))
		throw "Apenas números inteiros"
	else
		return factorial(n)/factorial(n - r);
}

function factorial(x){
	if(x <= 1)
		return 1;
	else
		return x*factorial( x - 1 );
}


console.log(com_nxr(1.5, 2))
