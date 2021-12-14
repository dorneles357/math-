myMatrix_1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

myMatrix_2 = [
	[11, 22, 33],
	[44, 55, 66],
	[77, 88, 99]
]
	
/*verificar se as matrizes tem a mesma ordem de grandeza (linhas e colunas)*/

teste_row = (arr_1, arr_2) => {
	if(arr_1.length == arr_2.length)
		return true;
	else
		return false;
}

teste_col = (arr_1, arr_2) => {
	for(m in arr_1){
		for(n in arr_2){
			if(arr_1[m].length == arr_2[n].length)
				continue;
			else
				return false;
		}	
	}
	return true;
}

/*verificar a soma das matrizes em cada elemento em um novo array*/

sum = (arr_1, arr_2) => {
	const numrow = arr_1.length;
	const numcol = arr_1[0].length;
	var matrix = [];

	//criar uma nova matriz de ordem correspondente
	for(let row = 1; row <= numrow; row ++){
		var table = new Array();
		matrix.push(table);
	}

	//soma dos elementos de cada matriz
	for(let row = 0; row < numrow; row ++){
		for(let col = 0; col < numcol; col ++){
			matrix[row].push(arr_1[row][col] + arr_2[row][col]); 
		}
	}

	console.log(matrix)
}
console.log(myMatrix_1, myMatrix_2)
sum(myMatrix_1, myMatrix_2)
