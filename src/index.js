import '../src/style.css';

const btns = document.querySelector('.s-1-btns');

const switchContainers = e => {
	if (!e.target.classList.contains('type-btn')) return;
	document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('selected'));
	e.target.classList.add('selected');
	const id = e.target.id;
	document.querySelectorAll('.s-2-container').forEach(btn => btn.style.display = 'none');
	document.querySelector(`.${id}-container`).style.display = 'flex';
}




btns.addEventListener(`click`, switchContainers);