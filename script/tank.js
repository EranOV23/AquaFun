var tank = (function(){
	
	var $tank = document.querySelector(".tank")
	var fishNo = 0;
	var fishArr = [];
	var popCounter = 0;
	var nemoCounter = 0;
	var doryCounter = 0;

	// Adding Nemo
	function addFish(){	
		
		nemoCounter = 1
		for( var dag of fishArr){
			if(dag.name === "Nemo"){
				nemoCounter++;
			}
		}
		
		if((doryCounter/nemoCounter) <= 0.3){
			throw "Too Many Nemos"
			console.log(doryCounter/nemoCounter)
		    return $("#NemoModal").modal("show");
		}			

		fishNo += 1;
		var newFish = new fish("Nemo", "img/nemo.png", fishNo);
		fishArr.push(newFish);
		console.log(`${newFish.name} No.${fishNo}`);
		
		var $fish = document.createElement("img");
		$fish.setAttribute("src", newFish.image);
		$fish.setAttribute("class", "fish");
		$fish.setAttribute("id", fishNo);
		$fish.setAttribute("title", newFish.name + fishNo);
		$tank.appendChild($fish);
		newFish.swim();
		newFish.pop(popCounter);

	}

	// Adding Dory
	function addCleaner(){

		doryCounter = 1
		for( var dag of fishArr){
			if(dag.name === "Dory"){
				doryCounter++;
			}
		}

		fishNo += 1;
		var newCleaner = new cleaner("Dory", "img/dory.png", fishNo);
		fishArr.push(newCleaner);
		console.log(`${newCleaner.name} No.${fishNo}`);
		
		var $fish = document.createElement("img");
		$fish.setAttribute("src", newCleaner.image);
		$fish.setAttribute("class", "fish");
		$fish.setAttribute("id", fishNo);
		$fish.setAttribute("title", newCleaner.name + fishNo);
		$tank.appendChild($fish);
		
		newCleaner.swim();
		newCleaner.clean(popCounter);
	}

	// Feeding all nemos
	function feed(){

		if(fishArr.length === 0){
			throw "No fish to feed";
		} else {

			for( let fish of fishArr){
				if(fish.name === "Nemo"){
					var $width = $("#"+fish.id).css("width");
					$("#"+fish.id).css("width", "+=5")
					$("#"+fish.id).css("height", "+=5")
				}
			}

			console.log("the fish was fed")

		}

	}

	// Checking container cleanliness
	function countPop(counter){
		popCounter += counter;
		if(popCounter < 0){
			popCounter = 0;
		}
		$opacity = Number($(".glass").css("opacity", popCounter));
		console.log("The Aquairum is " + Math.round(popCounter * 100) +"% dirty");
		if(popCounter >= 1){
			for (var i = 1; i <= fishArr.length + 4; i++) {
				clearInterval(i);
			}

		    $("#GameOver").modal("show");
			console.log("OMG your Aqua is so dirty: GAME OVER");
		}
	}

	return{
		addFish: addFish,
		addCleaner: addCleaner,
		feed: feed,
		countPop: countPop,

	}
})();