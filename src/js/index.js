const buttonsCarousel = document.querySelectorAll('.button')
const images = document.querySelectorAll('.image')

buttonsCarousel.forEach((button, i) => {
	button.addEventListener('click', () => {
		deactivateSelectedButton()

		selectCarouselButton(button)

		hideActiveImage()

		showActiveImage(i)

	})
})

const deactivateSelectedButton = () => {
	const selectedButton = document.querySelector('.selected')
		selectedButton.classList.remove('selected')
}

const selectCarouselButton = (button) => {
	button.classList.add('selected')
}

const hideActiveImage = () => {
	const activeImage = document.querySelector('.active')
		activeImage.classList.remove('active')
}

const showActiveImage = (i) => {
	images[i].classList.add('active')
}