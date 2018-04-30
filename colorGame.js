var numSquares = 6;
// var colors = generateRandomColors(numSquares);
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easy");
// var hardBtn = document.querySelector("#hard");
var modeButton = document.querySelectorAll(".mode");



init();
function init(){
	// mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();		
}



function setupModeButtons(){
	for(var i = 0; i < modeButton.length; i++){

		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
        	this.classList.add("selected");

        	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
	        // if(this.textContent === "Easy"){
	        // 	numSquares = 3;
	        // }
	        // else{
	        // 	numSquares = 6;
	        // }
	        reset();
	        // figure out how many squares to show
	        // pick new colors
	        // pick a new pickedColor
	        // update page to reflect changes
	    });
	}
}



function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
		// grab color of clicked square
			var clickedColor = this.style.backgroundColor;

			// compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!" ;
			}
		});
	}
}



function generateRandomColors(num){
	// make an array
	var arr =[]
	// add num random colors to array
	// repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}



function randomColor(){
	// pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	// "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}



function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}



resetButton.addEventListener("click", function(){
	// // generate all new colors
	// colors = generateRandomColors(6);
	// // pick a new random  color from array
	// pickedColor = pickColor();
	// // change colorDisplay to match pickesd color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors";
	// messageDisplay.textContent = "";
	// // change colors of squares
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
	reset();
});


// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}

// });



// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
		
// 	}
	
// });
function reset(){
	colors = generateRandomColors(numSquares);
	// pick a new random  color from array
	pickedColor = pickColor();
	// change colorDisplay to match pickesd color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
 			squares[i].style.display = "block";

 			squares[i].style.backgroundColor = colors[i];
 		}
 		else{
 			squares[i].style.display = "none";
 		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
}





























