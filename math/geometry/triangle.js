/*crie um app que identifique as dimensões de triângulo*/

const verificationTriangle = (a, b, c) => {
	if(a < (b + c) && a > Math.abs(b - c)){
		return true;
	}
	else{
		return false
	}
}


console.log(verificationTriangle(2,1,1));
