

let pythagoras = (co, ca, h){
	if(co && ca){
		return Math.sqrt(co**2 + ca **2);
	} else if(co && h){
		return Math.sqrt(co**2 - h**2);
	} else if (ca && h){
		return Math.sqrt(ca**2 - h**2);
	}
};


pythagoras(2, 3);
