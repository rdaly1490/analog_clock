const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

const allHands = document.querySelectorAll('.hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	handleTransition(seconds);

	// add 90 at end due to initial 90deg rotate in css
	const secondsToDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;

	const minutesToDegrees = ((minutes / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;

	const hoursToDegrees = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
}

// fixes issue where at 0s/m/h it transitions backwards to get to 90deg
function handleTransition(seconds) {
	if (seconds === 0) {
		allHands.forEach(hand => hand.style.transition = 'all 0.0s');
	} else if (seconds === 1) {
		allHands.forEach(hand => {
			hand.style.transition = 'all 0.05s'
			hand.style.transitionTimingFunction ='cubic-bezier(0.1, 2.7, 0.58, 1)';
		});
	}
}

// set initial rotations, then update every second
setDate();
setInterval(setDate, 1000);