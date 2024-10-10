import Swiper from 'swiper'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'

Swiper.use([Pagination, Navigation, FreeMode])

export function init() {
	let slidersArray = Array.from(document.querySelectorAll('.js-slider'))

    let sliderItems
    let sliderCentered
    let sliderLoop

	if (slidersArray.length) {

		slidersArray.forEach(slider => {
            
            let sliderName = slider.dataset.sliderName
			let sliderSelector = `[data-slider-name="${sliderName}"]`

            document.querySelector(`${sliderSelector}`).dataset.sliderCenter
                ? sliderCentered = true
                : sliderCentered = false

            document.querySelector(`${sliderSelector}`).dataset.sliderLoop
                ? sliderLoop = true
                : sliderLoop = false

			document.querySelector(`${sliderSelector}`).dataset.sliderItems
                ? sliderItems = Number(document.querySelector(`${sliderSelector}`).dataset.sliderItems)
                : sliderItems = "auto"

			new Swiper(sliderSelector, {
				slidesPerView: sliderItems,
                centeredSlides: sliderCentered,
                loop: sliderLoop,
				spaceBetween: 10,

				navigation: {
					nextEl: `.slider-btn.next-${sliderName}`,
					prevEl: `.slider-btn.prev-${sliderName}`
				},

				breakpoints: {
					1080: {
						spaceBetween: 20,
					},
				}
			})
		})
	}
}
