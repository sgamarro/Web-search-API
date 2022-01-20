var urlApi = "//api.nal.usda.gov/fdc/v1/foods/search?&api_key=XtMlB8CeNUnc3DcoRyNheby2PywgxOfKfeGSCGRi&query=energydrink(monster)&dataType=Survey (FNDDS)"
fetch(urlApi)
.then((respose) => respose.json())
.then((monster) =>{
	console.log(monster)
	for (i=0; i<urlApi.length; i++){
		var foodInfo = document.createElement('p');
		var foodM = document.createTextNode(monster.foods[i])
		foodInfo.appendChild(foodM) 
	}
	document.getElementById('monster-caf').innerHTML = "Caffeine:" + monster.foods[0].foodNutrients[6].value + "mg";
	document.getElementById('monster-sug').innerHTML = "Sugar:" + monster.foods[0].foodNutrients[8].value + "g";
	document.getElementById('monster-pro').innerHTML = "Protein:" + monster.foods[0].foodNutrients[0].value + "g";
	document.getElementById('monster-fat').innerHTML = "Fat:" + monster.foods[0].foodNutrients[1].value + "g";
})
