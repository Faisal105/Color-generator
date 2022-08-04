function myColor() {
	var red = document.getElementById('red-input').value;
	var green = document.getElementById('green-input').value;
	var blue = document.getElementById('blue-input').value;
	var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
	var cardStyle = document.getElementsByClassName('card');
	document.body.style.backgroundColor = color;
	document.getElementById('card').value = color;
}
document.getElementById('red-input').addEventListener('input', myColor);
document.getElementById('green-input').addEventListener('input', myColor);
document.getElementById('blue-input').addEventListener('input', myColor);
