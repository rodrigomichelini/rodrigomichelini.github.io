var darkColors = [
	"#4eb1ba",
	"#e3ae57",
	"#50d07d",
	"#e9633b",
	"#00ace9",
	"#d43f3f",
	"#6a9a1f"
];

var lightColor = "#eceae0";

//Select color based on current time
//the color is select by the seconds and the darkness by the daylight
var chooseColorScheme = function() {
	var currentDate = new Date();
	var darkColorNumber = currentDate.getSeconds() % 7;
	var isDarkAlready = (currentDate.getHours() > 17) || (currentDate.getHours() < 7); 

	changeColorBody(darkColorNumber, isDarkAlready);
}

var changeColorBody = function(darkColorNumber, isDarkAlready) {
	if(isDarkAlready) {
		$("body").css("background-color", darkColors[darkColorNumber]);
		$("body").css("color", lightColor);
	} else {
		$("body").css("background-color", lightColor);
		$("body").css("color", darkColors[darkColorNumber]);
	}
}



