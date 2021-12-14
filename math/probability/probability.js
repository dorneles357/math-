arr = [1, 2, 3, 5, 4, 6];

/*função probabilidade - clássica*/
const probability = (arr, numb) => {
	const number_cases_p = arr.length;
	const number_cases_d = numb;

	const result = (number_cases_d/number_cases_p)*100

	console.log(result.toFixed(2) + "%");
}

probability(arr, 1);
