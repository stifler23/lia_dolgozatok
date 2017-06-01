'strict'
let tomb = [2,4,5,"4","valami"]
let osszeg = 0;

for (let i=0; i<tomb.length; i++) {
	if (typeof(tomb[i]) === 'number'){
 	osszeg = osszeg + tomb[i];
 	console.log("szam :"+tomb[i]);
} 

else {
 	console.log("nem szam: "+tomb[i]);
}

}
	console.log("Tömb összege: "+osszeg);