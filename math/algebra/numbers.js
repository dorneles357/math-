/*cire um algoritimo que verifique se o número é par ou impar*/

const verificationNumber = (number) => {
	if(number % 2 === 0){
		console.log(`o número ${number} é par!`);
	}
	else{
		console.log(`o número ${number} é impar!`);
	}
} 

verificationNumber(5)
