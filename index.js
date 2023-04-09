// player name

var player1 = "Player 1";
var player2 = "Player 2";

// function for changing player name
function editNames (){

    
    var player1= prompt("What is your Player1 Name");
    var player2 = prompt("What is your Player2 Name");
    
    document.querySelector("p.Player1").innerHTML=player1;
    document.querySelector("p.Player2").innerHTML=player2;
}

// function for rollTheDice
function rollTheDice(){
    setTimeout(function() {  
        
        var randomNumber1 = Math.floor(Math.random()*6) + 1;
        var randomNumber2 = Math.floor(Math.random()*6) + 1;

        var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
        var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

        document.querySelector(".img1").setAttribute("src", randomDiceImage1);
        document.querySelector(".img2").setAttribute("src", randomDiceImage2);

        if (randomNumber1 === randomNumber2){
            document.querySelector("h1").innerHTML="DRAW!";
        } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML= player2 + " WIN!"
        } else {
            document.querySelector("h1").innerHTML= player1 + " WIN!"
        }

    }
        ), 500;
    
}









































	// // Player name
	// var player1 = "Player 1";
	// var player2 = "Player 2";

	// // Function to change the player name
	// function editNames() {
	// 	player1 = prompt("Change Player1 name");
	// 	player2 = prompt("Change player2 name");

	// 	document.querySelector("p.Player1").innerHTML = player1;
	// 	document.querySelector("p.Player2").innerHTML = player2;
	// }

	// // Function to roll the dice
	// function rollTheDice() {
	// 	setTimeout(function () {
	// 		var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	// 		var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    //         var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    //         var randomDiceImage2 = "dice" + randomNumber2 +  ".png";

    //         var randomImageSource1 = "images/" + randomDiceImage1;
    //         var randomImageSource2 = "images/" + randomDiceImage2;

    //         document.querySelector(".img1").setAttribute("src", randomImageSource1);
    //         document.querySelector(".img2").setAttribute("src", randomImageSource2)

	// 		if (randomNumber1 === randomNumber2) {
	// 			document.querySelector("h1").innerHTML = "Draw!";
	// 		}

	// 		else if (randomNumber1 < randomNumber2) {
	// 			document.querySelector("h1").innerHTML
	// 							= (player2 + " WINS!");
	// 		}

	// 		else {
	// 			document.querySelector("h1").innerHTML
	// 					  	= (player1 + " WINS!");
	// 		}
	// 	}, 2500);
	// }
