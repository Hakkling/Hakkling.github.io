if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 600);

}

var x = 0;

var titleText = ["$", "$ a", "$ an", "$ ani", "$ anim", "$ anime", "$ anime.", "$ anime.t", "$ anime.te", "$ anime.tea", "$ anime.team", "$ anime.tea", "$ anime.te", "$ anime.t",  "$ anime.",  "$ anime", "$ anim", "$ ani", "$ an", "$ a"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
