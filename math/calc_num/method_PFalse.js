/*método ponto falso*/
method_PF = (a, b) =>{
	let res_1 = (a*f(b) - b*f(a))/(f(b) - f(a));
	return console.log(res_1.toFixed(8))
}

/*Função em análise*/
f = (x) =>{
	let res_0 = x*(Math.log10(x)) - 1;
	return res_0;
}

/*resultados*/

method_PF(2, 3);
method_PF(2.4198, 3);
method_PF(2.5049, 2.5061);
method_PF(2.5061, 2.5062);


