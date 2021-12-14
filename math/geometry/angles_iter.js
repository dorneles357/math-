/*um algotirimo que diga a soma dos ângulos internos de um poligono convexo regular*/

const angles = (n) =>{
	if(n <= 2){
		throw 'Apenas poligonos convexos regulares.'
	} else {
		return console.log((n-2)*180);
	}
	
};


try{
	angles(4)
	angles(3)
	angles(5)
	angles(2)
	angles(1)
	angles(0)
} catch(err){
	console.log(err);
}
