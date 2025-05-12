'use strict';
document.addEventListener('DOMContentLoaded', () => {
	const updateClock = () => {
		const currentDate = new Date();

		const currentHours = currentDate.getHours();
		const currentMinutes = currentDate.getMinutes();
		const currentSeconds = currentDate.getSeconds();

		updateDigitalClock(currentHours, currentMinutes);
		updateAnalogClock(currentHours, currentMinutes, currentSeconds);
		updateDate(currentDate);
	};

	const updateAnalogClock = (currentHours, currentMinutes, currentSeconds) => {
		const clock = document.querySelector('.analog-clock');

		const clockHours = clock.querySelector('.analog-clock__hours');
		const clockMinutes = clock.querySelector('.analog-clock__minutes');
		const clockSeconds = clock.querySelector('.analog-clock__seconds');
		clockHours.style.transform = `translate(-50%, -50%) rotate(${
			30 * (currentHours % 12) + 0.5 * currentMinutes
		}deg)`;
		clockMinutes.style.transform = `translate(-50%, -50%) rotate(${
			6 * currentMinutes + 0.1 * currentSeconds
		}deg)`;
		clockSeconds.style.transform = `translate(-50%, -50%) rotate(${6 * currentSeconds}deg)`;
	};

	const updateDigitalClock = (currentHours, currentMinutes) => {
		const digitalClock = document.querySelector('.digital-clock');
		const digitalClockHours = digitalClock.querySelector('.digital-clock__hours');
		const digitalClockMinutes = digitalClock.querySelector('.digital-clock__minutes');
		const digitalClockMeridiem = digitalClock.querySelector('.digital-clock__meridiem');

		digitalClockMeridiem.textContent = currentHours < 12 ? 'AM' : 'PM';

		currentHours = currentHours % 12;
		digitalClockHours.textContent = currentHours < 10 ? `0${currentHours}` : currentHours;
		digitalClockMinutes.textContent = currentMinutes;
	};

	const updateDate = (currentDate) => {
		const date = document.querySelector('.date');

		const currentDay = currentDate.getDate();
		const currentMonth = currentDate.getMonth();
		const currentYear = currentDate.getFullYear();

		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		date.textContent = `${currentDay} ${months[currentMonth]}, ${currentYear}`;
	};
	updateClock();
	setInterval(updateClock, 1000);
});
