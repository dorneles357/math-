/*criar um algoritimo que calcule a raizes de uma equação do 2° grau*/


const equation_2 = (a, b, c) => {
	const res = b*b - 4*a*c;

	if(res < 0) 
		return console.log(`Não possui raizes reais`);

	const delta = Math.sqrt(res);
	const x_1 = (-b + delta)/2*a;
	const x_2 = (-b - delta)/2*a;
	
	const vertice_x = -(b/2*a);
	const vertice_y = -(delta/4*a);
  let point;
	
	if( a > 0)
		point = "Ponto máximo";
	else 
		point = "Ponto mínimo";


	console.log(`
	raizes: [${x_1}, ${x_2}] \n 
	${point}: (${vertice_x}, ${vertice_y})`);
}


equation_2(1, 2, -4);
