const secondHand = document.querySelector('.second-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	console.log(seconds)
	const secondsToDegrees = ((seconds / 60) * 360) + 90; // add 90 at end due to initial 90deg rotate in css
	secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
}
setDate();
setInterval(setDate, 1000);