window.addEventListener('DOMContentLoaded', () => {



	const browser = () => {
		const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
		const isFirefox = typeof InstallTrigger !== 'undefined';
		const blur = document.querySelector('.top__blur'),
			headerBlur = document.querySelector('.header__blur');
		if (!isChrome) {
			blur.classList.add('top__blur--true');
			headerBlur.classList.add('header__blur--true');
		}
	};
	browser();


	const menu = () => {
		const menuBtn = document.querySelector('.menu-button'),
			link = document.querySelectorAll('.header-nav__link'),
			nav = document.querySelector('.header-nav'),
			partners = document.querySelector('.partners'),
			header = document.querySelector('.header'),
			headerBlur = document.querySelector('.header__blur'),
			sticky = partners.offsetTop;


		menuBtn.addEventListener('click', event => {
			event.preventDefault();
			if (menuBtn.classList.contains('menu-active')) {
				menuBtn.classList.remove('menu-active');
				nav.classList.remove('header-nav--active');
				headerBlur.classList.remove('header__blur--active');
			} else {
				menuBtn.classList.add('menu-active');
				nav.classList.add('header-nav--active');
				headerBlur.classList.add('header__blur--active');
			}
		});
		link.forEach(item => {
			item.addEventListener('click', () => {
				menuBtn.classList.remove('menu-active');
				nav.classList.remove('header-nav--active');
				headerBlur.classList.remove('header__blur--active');
			});
		});
		window.onscroll = function() { scrollNavbar(); };
		function scrollNavbar() {
			if (window.pageYOffset >= sticky) {
				header.classList.add('header--scroll');
			} else {
				header.classList.remove('header--scroll');
			}
		}
	};
	menu();

	const tabs = () => {
		const tabs = document.querySelector('.partners__tabs'),
			tab = document.querySelectorAll('.partners__tab'),
			tabContent = document.querySelectorAll('.partners__content');

		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tabContent[i].classList.add('partners__content--active');
				} else {
					tabContent[i].classList.remove('partners__content--active');
				}
			}
		};

		tabs.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('.partners__tab');
			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});
	};
	tabs();

	const team = () => {
		const btn = document.querySelectorAll('.team__button'),
			team = document.querySelectorAll('.team__text'),
			bg = document.querySelector('.team__bg-button');


		btn.forEach((item, index) => {
			item.addEventListener('click', () => {
				for (let i = 0; i < 3; i++) {
					if (i === index) {
						btn[index].classList.add('team__button--active');
						team[index].classList.add('team__text--active');
					} else {
						btn[i].classList.remove('team__button--active');
						team[i].classList.remove('team__text--active');
					}
				}
				if (index === 0) {
					bg.classList.remove('team__bg-button--center');
					bg.classList.remove('team__bg-button--right');
				}
				if (index === 1) {
					bg.classList.add('team__bg-button--center');
					bg.classList.remove('team__bg-button--right');
				}
				if (index === 2) {
					bg.classList.add('team__bg-button--right');
					bg.classList.remove('team__bg-button--center');
				}
			});
		});
	};
	team();

	const swiper = new Swiper('.team__slider', {
		slidesPerView: 4,
		spaceBetween: 20,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true
		},
		slideToClickedSlide: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
				centeredSlides: true,
			},
			968: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			1130: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1900: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});

	const select = () => {
		const selectSingle = document.querySelector('.contact__select'),
			selectSingleTitle = document.querySelector('.contact__placeholder'),

			selectContent = document.querySelector('.contact__content'),
			selectSingleLabels = document.querySelectorAll('.contact__label');

		selectSingleTitle.addEventListener('click', () => {
			if ('active' === selectSingle.getAttribute('data-state')) {
				selectSingle.setAttribute('data-state', '');
				selectContent.classList.remove('contact__content--active');
			} else {
				selectSingle.setAttribute('data-state', 'active');
				selectContent.classList.add('contact__content--active');
			}
		});

		for (let i = 0; i < selectSingleLabels.length; i++) {
			selectSingleLabels[i].addEventListener('click', evt => {
				selectSingleTitle.textContent = evt.target.textContent;
				selectSingle.setAttribute('data-state', '');
				selectContent.classList.remove('contact__content--active');
			});
		}
	};
	select();

	const fileUpload = () => {

		const fileUpload = document.getElementById('file-upload'),
			txtUpload = document.createTextNode('Upload your CV'),
			txtLoaded = document.createTextNode('File loaded'),
			contactsLabel = document.querySelector('.contact__label-file');

		if (typeof(contactsLabel) !== 'undefined' && contactsLabel !== null) {
			contactsLabel.appendChild(txtUpload);
			fileUpload.addEventListener('input', event => {
				const input = event.target;
				if (input.value !== "") {
					contactsLabel.classList.toggle('contact__label-file--loaded');
					contactsLabel.removeChild(txtUpload);
					contactsLabel.appendChild(txtLoaded);
				} else {
					contactsLabel.removeChild(txtLoaded);
					contactsLabel.appendChild(txtUpload);
				}
			});
		}
	};
	fileUpload();

	const modal = () => {
		const open = document.querySelectorAll('#open-modal'),
		 modal = document.querySelector('.modal'),
			content = document.querySelector('.modal__content'),
			close = document.querySelector('.modal__close');

		open.forEach(index => {
			index.addEventListener('click', () => {
				modal.classList.add('modal--active');
			});
		});

		modal.addEventListener('click', e => {
			const border = e.composedPath().includes(content);
			if (!border || close) {
				modal.classList.remove('modal--active');
			}
		});
	};
	modal();

	const mobile = () => {
		const newParent = document.querySelector('.team__wrap'),
			oldParent = document.querySelector('.team__content'),
			widthScreen = document.querySelector('body').clientWidth;
		if (widthScreen <= 767) {
			while (oldParent.childNodes.length > 0) {
				newParent.append(...oldParent.childNodes);
			}
		}
	};
	mobile();
	setInterval(() => mobile(), 2000);


});
