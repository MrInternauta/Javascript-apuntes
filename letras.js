function platzom(string){	
	if(esPalindromo(string)){
		string = alternaMayus(string);
	}else{
		if(string.toLowerCase().endsWith('ar'))
			string = string.substring(0,string.length-2);
		if(string.toLowerCase().startsWith('z'))
			string += 'pe';
		if(string.length>=10)
			string = cortaPalabra(string);
	}
	returnstring;
}

function esPalindromo (string){
	var revertida='';
	string=string.toLowerCase();
	for(let i=string.length-1; i>=0; i--){//va a ir recorriendo la la cadena de atras hacia adelante
		revertida+=string.charAt(i);
	}
	returnstring==revertida;
}

function alternaMayus(string){
	var aux = '';
	for(let i=0; i<string.length; i++)
		i%2==0 ? aux+=string.toUpperCase().substr(i,1) : aux+=string.toLowerCase().substr(i,1);
	return aux;
}

function cortaPalabra(string){
	let n = Math.floor(string.length/2);
	let m = Math.ceil(string.length/2);
	return`${string.substr(0,n)}-${string.substr(n,m)}`;
}