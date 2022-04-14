//changing the first dicee image

var randomNumber1 = Math.floor(Math.random() * 6) + 1;// 1-6
var UpdatedSrcOfImg1 = "images/dice" + randomNumber1 + ".png";//choos teh random image form dice1 to 6
var image1 = document.querySelectorAll("img")[0];// make the path for reandom number created by rn1 s image
//changing the path of image1
image1.setAttribute("src", UpdatedSrcOfImg1);// no need of " " in seconfd because it is already a string


//changing the second dicee image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var UpdatedSrcOfImg2 = "images/dice" + randomNumber2 + ".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src", UpdatedSrcOfImg2);

// if player 1 wins
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="😍 Player 1 wins";
}

//if player 2 wins
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 wins😘";
}

//if match draw
else{
document.querySelector("h1").innerHTML="Match is Draw 😆"
}

