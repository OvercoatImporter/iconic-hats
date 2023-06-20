/** @format */

var colorPalettes = [
	["#2C3639", "#3F4E4F", "#A27B5C", "#DCD7C9"],
	["#65647C", "#8B7E74", "#C7BCA1", "#F1D3B3"],
	["#204051", "#3B6978", "#84A9AC", "#CAE8D5"],
	["#F0E9D2", "#E6DDC4", "#678983", "#181D31"],
	["#E7DEC8", "#CBAF87", "#7E8A97", "#30475E"],
	["#2D2424", "#5C3D2E", "#B85C38", "#E0C097"],
	["#FFF4E0", "#FFBF9B", "#B46060", "#4D4D4D"],
	["#884A39", "#C38154", "#FFC26F", "#F9E0BB"],
	["#9BABB8", "#EEE3CB", "#D7C0AE", "#967E76"],
	["#606C5D", "#FFF4F4", "#F7E6C4", "#F1C376"],
];

var currentPalette = 0;

// Switch colors on click
function switchColor() {
	var color0 = colorPalettes[currentPalette][0];
	var color1 = colorPalettes[currentPalette][1];
	var color2 = colorPalettes[currentPalette][2];
	var color3 = colorPalettes[currentPalette][3];

	document.documentElement.style.setProperty("--background1", color0);
	document.documentElement.style.setProperty("--background2", color1);
	document.documentElement.style.setProperty("--accent1", color2);
	document.documentElement.style.setProperty("--accent2", color3);

	currentPalette++;
}
