import Swiper from 'swiper'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'

Swiper.use([Pagination, Navigation, FreeMode])

export function init() {
	let slidersArray = Array.from(document.querySelectorAll('.js-slider'))

    let sliderItems
    let sliderCentered
    let sliderInit
    let sliderLoop

	if (slidersArray.length) {
		slidersArray.forEach(slider => {
            let sliderName = slider.dataset.sliderName
			let sliderSelector = `[data-slider-name="${sliderName}"]`

            // document.querySelector(`${sliderSelector}`).dataset.sliderCenter
            //     ? sliderCentered = true
            //     : sliderCentered = false
            
            // document.querySelector(`${sliderSelector}`).dataset.sliderInit
            //     ? sliderInit = Number(document.querySelector(`${sliderSelector}`).dataset.sliderInit)
            //     : 1

            // document.querySelector(`${sliderSelector}`).dataset.sliderLoop
            //     ? sliderLoop = true
            //     : sliderLoop = false

			sliderItems = document.querySelector(`${sliderSelector}`).dataset.sliderItems

			// Если кол-во просматриваемых слайдов больше 1, то выводим указанное кол-во, а иначе 'auto'
			let numPerView = sliderItems > 1 || sliderItems == 1 ? sliderItems : 'auto'

			new Swiper(sliderSelector, {
				// freeMode: true,
				spaceBetween: 10,
				observer: true,
				observeParents: true,
				navigation: {
					nextEl: `.slider-btn.next-${sliderName}`,
					prevEl: `.slider-btn.prev-${sliderName}`
				},

                // centeredSlides: sliderCentered ? true : false,
                // initialSlide: sliderInit ? sliderInit : 1,
                // loop: sliderLoop ? true : false,
				
				breakpoints: {
					680: {
						slidesPerView: numPerView > 1 ? 2 : 'auto',
						spaceBetween: 20,
					},
					1080: {
						slidesPerView: numPerView > 1 ? 3 : 'auto',
						spaceBetween: 20,
					},
					1280: {
						slidesPerView: numPerView,
						spaceBetween: 20,
					}
				}
			})
		})
	}
}
