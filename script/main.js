var aquafun = (function(){

    console.log("AQUAFUN START NOW");

    var $addfish = document.querySelector("#addfish");
    var $addcleaner = document.querySelector("#addcleaner");
    var $feed = document.querySelector("#feed");
    var $reload = document.querySelector("#reload");


    $addfish.onclick = function(){
        tank.addFish();
    }

    $addcleaner.onclick = function(){
        tank.addCleaner();
    }

    $feed.onclick = function(){
        tank.feed();
    }

    $reload.onclick = function(){
        window.location.reload(true);
    }

})()