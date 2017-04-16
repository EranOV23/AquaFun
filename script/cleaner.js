var cleaner = function(name, imgUrl, id){
    this.name = name;
    this.image = imgUrl;
    this.id = id;

	cleaner.prototype.swim = function(){
		var randNum = Math.floor(Math.random() * 80) + 1;
		$("#" + this.id).css({top: randNum + "%"});
		console.log(`${name} ${id} is swimming`);
	}

	cleaner.prototype.clean = function(){
	  	var clean =  -0.05;
		var cleanInterval = setInterval(function(){
			console.log(`${name} is cleaning`);
		  	return tank.countPop(clean);
		}, 4000);

	}

}