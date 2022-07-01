window.onload = function () {
	console.log("doing stuff");

// DROPDOWN FOR THEMES

//the stylesheet is divided into themes and structure to make this easy.
//I swap the theme stylesheet depending on what the user selects, painting the page without breaking it.

//getting a handle and a list of options

		var styleSheet = null;
		styleSheet = document.getElementById("theme");  //href element for theme stylesheets in html

		var selectThemes = document.getElementById("selectThemes"); 								//the select element in html
		//console.log(selectThemes);
		var themeOptions = Array.from(selectThemes.getElementsByTagName("option"));	//the option elements in the select element in html
		//console.log(themeOptions);
		var selectedTheme = "lightmode"; 																						// option currently selected

		// same thing in short: themeOptions.forEach(element => console.log(element.value));
		//themeOptions is an array, each element of this array is thrown into the console
		//didnt use the short option for easy understanding
		
//Event listener

	//looks at every child option, asks if it is selected. If it is, the value of this child option will be saved.

		function onSelect() {


			themeOptions.forEach(function(option){	//read it backwords, "option for each options" -> for each option, in the array of the name "options"
				if (option.selected == true) {				// asks each option if it is selected, and if it is:
					selectedTheme = option.value				//saves its value
					console.log(selectedTheme);
					return															//stops if right value has been found
				}
			});

			if (selectedTheme === "darkmode") {
				console.log("itsdarkmode");
				styleSheet.setAttribute("href", "Stylesheets/stylesheet_dark.css");
			}

			if (selectedTheme === "lightmode") {
				console.log("itslightkmode");
				styleSheet.setAttribute("href", "Stylesheets/stylesheet_light.css");
			}

			if (selectedTheme === "rainbow") {
				console.log("itsrainbowmode");
				styleSheet.setAttribute("href", "Stylesheets/stylesheet_rainbow.css");
			}

		};


		selectThemes.addEventListener('change', onSelect);  //if the selected option is changed, run the function


//SHOWING OR HIDING PIECE-CONTAINERS VIA CHECKBOX

// checkbox for pieces_container (Containers on the sides of the home page were the peices are held)

		var pieceContainer1 = document.getElementById("piece_container_1");									//getting first containers
		var pieceContainer2 = document.getElementById("piece_container_2");									//getting second container
		var checkboxForPieceContainer = document.getElementById("show-piece-container");		//getting the checkbox
		var checkboxContainer = document.getElementById("checkbox-container");


			//there is a class for these containers that makes them hidden (its name is "hidden"). 
			//If the checkbox is checked the class will be put on the containers, if it is not checked the class will be removed.

		function validatePieceContainer(){
			if (checkboxForPieceContainer.checked == 1){
				console.log("checked pieceContainer") ;
				pieceContainer1.classList.remove("hidden");
				pieceContainer2.classList.remove("hidden");
				checkboxContainer.classList.remove("checkbox-margin");
			} else {
				console.log("unchecked pieceContainer") ;
				pieceContainer1.classList.add("hidden");
				pieceContainer2.classList.add("hidden");
				checkboxContainer.classList.add("checkbox-margin");
			}
		}
	checkboxForPieceContainer.addEventListener('change', validatePieceContainer); //starts the function on change at the checkbox

// //SHOWING OR HIDING COORDINATES VIA CHECKBOX

		var bordCheckbox = document.getElementById("bord");														//the coordinates who shall be hidden or not
		var checkboxForCoordinates = document.getElementById("show-coordinates");			//the checkbox
	
//there is a class for these coordinates that makes them hidden (its name is "hidden_coordinates").
//If the checkbox is checked the class will be put on the coordinates, if it is not checked the class will be removed.

		function validateCoordinates(){
			if (checkboxForCoordinates.checked == 1){
				console.log("checked Coordinates") ;
				bordCheckbox.classList.remove("hidden_coordinates");
			} else {
				console.log("unchecked Coordinates") ;
				bordCheckbox.classList.add("hidden_coordinates");
			}
		}
	checkboxForCoordinates.addEventListener('change', validateCoordinates); //starts the function on change at the checkbox

};