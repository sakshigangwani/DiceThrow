var randomnumber1 = Math.floor(Math.random() * 6)+1;

var randomDiceImage = "dice"+randomnumber1+".png";

var randomImage = randomDiceImage;

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomnumber2 = Math.floor(Math.random() * 6)+1;
var randomDiceImage1 = "dice"+randomnumber2+".png";
var randomImage2 = randomDiceImage1;

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}else{
    document.querySelector("h1").innerHTML = "Draw"
}