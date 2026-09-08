BODY = document.getElementsByTagName('body')[0]

// Mobile width
initAdaptiveViewport()

document.addEventListener('DOMContentLoaded', function() {
	// We print
	new Swiper('.we_print .list.mob .swiper', {
		spaceBetween: 40,
		speed: 6000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true
		},
		loop: true,
		slidesPerView:'auto',
		allowTouchMove: false,
	})


	// About info slider
	const aboutInfoSlider = document.querySelector('.about_info .swiper'),
		aboutInfo = document.querySelector('.about_info')

	if (aboutInfoSlider) {
		new Swiper(aboutInfoSlider, {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(aboutInfoSlider, '--spaceBetween'),
			slidesPerView: getCssVar(aboutInfoSlider, '--slidesPerView'),
			navigation: {
				nextEl: aboutInfo.querySelector('.swiper-button-next'),
				prevEl: aboutInfo.querySelector('.swiper-button-prev')
			}
		})
	}


	// Cases slider
	const casesSlider = document.querySelector('.cases .swiper'),
		cases = document.querySelector('.cases')

	if (casesSlider) {
		new Swiper(casesSlider, {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(casesSlider, '--spaceBetween'),
			slidesPerView: getCssVar(casesSlider, '--slidesPerView'),
			navigation: {
				nextEl: cases.querySelector('.swiper-button-next'),
				prevEl: cases.querySelector('.swiper-button-prev')
			},
			on: {
				resize: swiper => {
					setTimeout(() => {
						let items = swiper.el.querySelectorAll('.swiper-slide')

						items.forEach(el => el.style.height = 'auto')

						setHeight(items)
					}, 100)
				}
			}
		})
	}


	// Cases page slider
	const casesPageSlider = document.querySelector('.cases_page .slider .swiper'),
		casesPage = document.querySelector('.cases_page')

	if (casesPageSlider) {
		new Swiper(casesPageSlider, {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(casesPageSlider, '--spaceBetween'),
			slidesPerView: getCssVar(casesPageSlider, '--slidesPerView'),
			navigation: {
				nextEl: casesPage.querySelector('.swiper-button-next'),
				prevEl: casesPage.querySelector('.swiper-button-prev')
			},
			pagination: {
				el: casesPageSlider.querySelector('.swiper-pagination'),
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
		})
	}


	// Reviews slider
	const reviewsSlider = document.querySelector('.reviews .swiper'),
		reviews = document.querySelector('.reviews')

	if (reviewsSlider) {
		new Swiper(reviewsSlider, {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(reviewsSlider, '--spaceBetween'),
			slidesPerView: getCssVar(reviewsSlider, '--slidesPerView'),
			navigation: {
				nextEl: reviews.querySelector('.swiper-button-next'),
				prevEl: reviews.querySelector('.swiper-button-prev')
			},
			breakpoints: {
				0: {
					spaceBetween: getCssVar(reviewsSlider, '--spaceBetween-0'),
					slidesPerView: getCssVar(reviewsSlider, '--slidesPerView-0'),
				},
				768: {
					spaceBetween: getCssVar(reviewsSlider, '--spaceBetween-768'),
					slidesPerView: getCssVar(reviewsSlider, '--slidesPerView-768'),
				},
				1024: {
					spaceBetween: getCssVar(reviewsSlider, '--spaceBetween-1024'),
					slidesPerView: getCssVar(reviewsSlider, '--slidesPerView-1024'),
				},
				1280: {
					spaceBetween: getCssVar(reviewsSlider, '--spaceBetween-1280'),
					slidesPerView: getCssVar(reviewsSlider, '--slidesPerView-1280'),
				},
				1440: {
					spaceBetween: getCssVar(reviewsSlider, '--spaceBetween-1440'),
					slidesPerView: getCssVar(reviewsSlider, '--slidesPerView-1440'),
				},
				1900: {
					spaceBetween: getCssVar(reviewsSlider, '--spaceBetween-1900'),
					slidesPerView: getCssVar(reviewsSlider, '--slidesPerView-1900'),
				}
			},
			on: {
				resize: swiper => {
					setTimeout(() => {
						let items = swiper.el.querySelectorAll('.review')

						items.forEach(el => el.style.height = 'auto')

						setHeight(items)
					}, 100)
				}
			}
		})
	}


	// Product info
	const textBigSliders = [],
		textThumbSliders = [],
		textBigSlider = document.querySelectorAll('.text_block .slider .big .swiper'),
		textThumbsSlider = document.querySelectorAll('.text_block .slider .thumbs .swiper')

	textThumbsSlider.forEach((el, i) => {
		el.classList.add('text_thumbs_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(el, '--spaceBetween'),
			slidesPerView: getCssVar(el, '--slidesPerView'),
			lazy: true,
		}

		textThumbSliders.push(new Swiper('.text_thumbs_s' + i, options))
	})

	textBigSlider.forEach((el, i) => {
		el.classList.add('text_big_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(el, '--spaceBetween'),
			slidesPerView: getCssVar(el, '--slidesPerView'),
			lazy: true,
			thumbs: {
				swiper: textThumbSliders[i]
			},
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev')
			},
		}

		textBigSliders.push(new Swiper('.text_big_s' + i, options))
	})


	// Convenient format slider
	const convenientFormatSlider = document.querySelector('.convenient_format .swiper'),
		convenientFormat = document.querySelector('.convenient_format')

	if (convenientFormatSlider) {
		new Swiper(convenientFormatSlider, {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(convenientFormatSlider, '--spaceBetween'),
			slidesPerView: getCssVar(convenientFormatSlider, '--slidesPerView'),
			navigation: {
				nextEl: convenientFormat.querySelector('.swiper-button-next'),
				prevEl: convenientFormat.querySelector('.swiper-button-prev')
			},
			pagination: {
				el: convenientFormatSlider.querySelector('.swiper-pagination'),
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
		})
	}


	// Materials slider
	const materialsSlider = document.querySelector('.materials .swiper')

	if (materialsSlider) {
		new Swiper(materialsSlider, {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(materialsSlider, '--spaceBetween'),
			slidesPerView: getCssVar(materialsSlider, '--slidesPerView'),
		})
	}


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Popovers
	document.querySelectorAll('[popover]').forEach(el => {
		el.addEventListener('toggle', e => {
			document.querySelector(`[popovertarget="${el.id}"]`)?.classList.toggle('active', e.newState === 'open')
		})
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Mob. menu
	$('.mob_menu_modal .menu a.sub_link').click(function(e) {
		e.preventDefault()

		$(this)
			.next('.sub')
			.addClass('show')
	})


	$('.mob_menu_modal .menu .back_btn').click(function(e) {
		e.preventDefault()

		$(this)
			.closest('.sub')
			.removeClass('show')
	})


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)'),
		selectsInstances = []

	if (selects) {
		selects.forEach(el => {
			selectsInstances.push(NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			}))

			el.addEventListener('change', () => el.classList.add('selected'))

			if (el.querySelector('option[selected]')) {
				el.classList.add('selected')
			}
		})
	}


	// SEO text
	$('.seo_text .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this)
			.toggleClass('active')
			.prev('.text_block')
			.toggleClass('show')
	})


	// Products filter
	$('.products_filter .mob_btn').click(function(e) {
		e.preventDefault()

		$(this)
			.toggleClass('active')
			.next('form')
			.slideToggle('show')
	})


	$('.products_filter .name').click(function(e) {
		e.preventDefault()

		$(this)
			.toggleClass('active')
			.next('.data')
			.slideToggle('show')
	})


	// Products height
	document.querySelectorAll('.products .grid_row').forEach(el => {
		let styles = getComputedStyle(el)

		productsHeight(el, parseInt(styles.getPropertyValue('--items_per_line')))
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}
})



window.addEventListener('resize', function () {
	// Products height
	document.querySelectorAll('.products .grid_row').forEach(el => {
		let styles = getComputedStyle(el)

		productsHeight(el, parseInt(styles.getPropertyValue('--items_per_line')))
	})
})



// Products height
function productsHeight(context, step) {
	let start = 0,
		finish = step,
		products = [...context.querySelectorAll('.product_wrap')],
		i = 0

	products.forEach(el => el.style.height = 'auto')

	products.forEach(el => {
		products.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"]'))

		start = start + step
		finish = finish + step
		i++
	})
}