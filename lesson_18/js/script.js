


document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

	if (targetElement.closest('.icon-menu')) {
		document.documentElement.toggleAttribute('data-menu-open')
	}
}