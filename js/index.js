'use strict';
document.addEventListener('DOMContentLoaded', () => {
	const clock = document.querySelector('.clock');

	const clockHours = clock.querySelector('.clock__hours');
	const clockMinutes = clock.querySelector('.clock__minutes');
	const clockSeconds = clock.querySelector('.clock__seconds');

	const updateClock = () => {
		const currentDate = new Date();

		const currentHours = currentDate.getHours();
		const currentMinutes = currentDate.getMinutes();
		const currentSeconds = currentDate.getSeconds();

		clockHours.style.transform = `translate(-50%, -50%) rotate(${
			30 * (currentHours % 12) + 0.5 * currentMinutes
		}deg)`;
		clockMinutes.style.transform = `translate(-50%, -50%) rotate(${
			6 * currentMinutes + 0.1 * currentSeconds
		}deg)`;
		clockSeconds.style.transform = `translate(-50%, -50%) rotate(${6 * currentSeconds}deg)`;
		requestAnimationFrame(updateClock);
	};
	requestAnimationFrame(updateClock);
});
