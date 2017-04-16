var fish = function(name, imgUrl, id){
    this.name = name;
    this.image = imgUrl;
    this.id = id;

	fish.prototype.swim = function(){
		var randNum = Math.floor(Math.random() * 80) + 1;
		$("#" + this.id).css({top: randNum + "%"});
		console.log(`${name} ${id} is swimming`);
	}

	fish.prototype.pop = function(counter){
	  	var pop = 0.03;
		var popInterval = setInterval(function(){
			console.log(`${name} ${id} is poping`);
		  	return tank.countPop(pop);
		}, 4000);
  	
	}

}