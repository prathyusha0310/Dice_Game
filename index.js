var randomNumber1=Math.floor(Math.random()*6) + 1;
var ranLeftImage="dice"+randomNumber1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",ranLeftImage);

var randomNumber2=Math.floor(Math.random()*6);
var ranRightImage="dice"+randomNumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",ranRightImage);

if(randomNumber2>randomNumber1){
	document.querySelector("h1").innerHTML="Player 2 wins ! Better Luck next time player 1 :)";
	
}
else if(randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML="Player 1 wins ! Better Luck next time player 2 :)";
	
}
else if(randomNumber1==randomNumber2){
	document.querySelector("h1").innerHTML="Its a Tie !";
	
}