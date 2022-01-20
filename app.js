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
var nosApi = "//api.nal.usda.gov/fdc/v1/foods/search?&api_key=XtMlB8CeNUnc3DcoRyNheby2PywgxOfKfeGSCGRi&query=EnergyDrink(NOS)&dataType=Survey (FNDDS)"
fetch(nosApi)
.then((respose) => respose.json())
.then((noS) =>{
	console.log(noS)
	for (i=0; i<nosApi.length; i++){
		var foodInfo = document.createElement('p');
		var foodM = document.createTextNode(noS.foods[i])
		foodInfo.appendChild(foodM) 
	}
	document.getElementById('NOS-caf').innerHTML = "Caffeine:" + noS.foods[0].foodNutrients[6].value + "mg";
	document.getElementById('NOS-sug').innerHTML = "Sugar:" + noS.foods[0].foodNutrients[8].value + "g";
	document.getElementById('NOS-pro').innerHTML = "Protein:" + noS.foods[0].foodNutrients[0].value + "g";
	document.getElementById('NOS-fat').innerHTML = "Fat:" + noS.foods[0].foodNutrients[1].value + "g";
})
var rockApi = "//api.nal.usda.gov/fdc/v1/foods/search?&api_key=XtMlB8CeNUnc3DcoRyNheby2PywgxOfKfeGSCGRi&query=energydrink(Rockstar)&dataType=Survey (FNDDS)"
fetch(rockApi)
.then((respose) => respose.json())
.then((rock) =>{
	console.log(rock)
	for (i=0; i<rockApi.length; i++){
		var foodInfo = document.createElement('p');
		var foodM = document.createTextNode(rock.foods[i])
		foodInfo.appendChild(foodM) 
	}
	document.getElementById('rock-caf').innerHTML = "Caffeine:" + rock.foods[0].foodNutrients[6].value + "mg";
	document.getElementById('rock-sug').innerHTML = "Sugar:" + rock.foods[0].foodNutrients[8].value + "g";
	document.getElementById('rock-pro').innerHTML = "Protein:" + rock.foods[0].foodNutrients[0].value + "g";
	document.getElementById('rock-fat').innerHTML = "Fat:" + rock.foods[0].foodNutrients[1].value + "g";
})
var redApi = "//api.nal.usda.gov/fdc/v1/foods/search?&api_key=XtMlB8CeNUnc3DcoRyNheby2PywgxOfKfeGSCGRi&query=energydrink(Red Bull)&dataType=Survey (FNDDS)"
fetch(redApi)
.then((respose) => respose.json())
.then((redbull) =>{
	console.log(redbull)
	for (i=0; i<redApi.length; i++){
		var foodInfo = document.createElement('p');
		var foodM = document.createTextNode(redbull.foods[i])
		foodInfo.appendChild(foodM) 
	}
	document.getElementById('red-caf').innerHTML = "Caffeine:" + redbull.foods[0].foodNutrients[6].value + "mg";
	document.getElementById('red-sug').innerHTML = "Sugar:" + redbull.foods[0].foodNutrients[8].value + "g";
	document.getElementById('red-pro').innerHTML = "Protein:" + redbull.foods[0].foodNutrients[0].value + "g";
	document.getElementById('red-fat').innerHTML = "Fat:" + redbull.foods[0].foodNutrients[1].value + "g";
})
