// burger-menu

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    
    // Функция для открытия и закрытия меню
    burgerMenu.addEventListener('click', function () {
	burgerMenu.classList.toggle('active');
	navLinks.classList.toggle('active');
    });
    
    document.querySelector('.header__menu-body')?.addEventListener('click', function () {
	burgerMenu.classList.remove('active');
	navLinks.classList.remove('active');
    })
});

// clients-swiper

var swiper = new Swiper(".clients-mySwiper", {
    spaceBetween: 0,
    freeMode: true,
    autoplay: {
	delay: 500, // время задержки между слайдами (в миллисекундах)
	disableOnInteraction: false, // авто-плей не будет останавливаться при взаимодействии с пользователем
    },
    breakpoints: {
	// Указывает настройки для экранов до 768px
	
	
	1440: {
	    slidesPerView: 8.25, // На планшетах 2 слайда
	    spaceBetween: 1,
	},
	
	1024: {
	    slidesPerView: 7.25, // На планшетах 2 слайда
	},
	
	768: {
	    slidesPerView: 4, // На планшетах 2 слайда
	},
	
	519: {
	    slidesPerView: 3.25, // На планшетах 2 слайда
	},
	
	425: {
	    slidesPerView: 3.25, // На мобильных устройствах 1 слайд
	},
	
	360: {
	    slidesPerView: 3, // На мобильных устройствах 1 слайд
	},
    },
});

// form
// // Обработка формы

// Фильтр ввода для телефона
document.querySelector('.phone').addEventListener('input', function (e) {
    const input = e.target;
    let value = input.value;
    
    // Разрешаем только цифры и знак "+"
    const validChars = /^[\d+]*$/;
    if (!validChars.test(value)) {
	value = value.replace(/[^+\d]/g, ''); // Убираем недопустимые символы
    }
    
    // Не разрешаем более одного знака плюса в начале
    if (value.indexOf('+') > 0) {
	value = value.replace(/\++/g, ''); // Убираем все дополнительные плюсы
    }
    
    // Если первый символ не "+", то проверяем, что вводятся только цифры
    if (value.charAt(0) !== '+' && /\D/.test(value)) {
	value = value.replace(/\D/g, ''); // Убираем все символы, кроме цифр
    }
    
    // Применяем отформатированное значение обратно в поле ввода
    input.value = value;
});

const phoneInputs = document.querySelectorAll(".phone");

phoneInputs.forEach((input) => {
    window.intlTelInput(input, {
	initialCountry: "uz",
	separateDialCode: true,
	loadUtilsOnInit: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.7.0/build/js/utils.js",
	strictMode: true,
	autoPlaceholder: "off",
	formatOnDisplay: true,
	hiddenInput: () => ({phone: "phone"}),
    });
})

// recommendation-mySwiper

var swiper = new Swiper(".recommendation-mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    breakpoints: {
	// Указывает настройки для экранов до 768px
	
	1024: {
	    slidesPerView: 3.25, // На планшетах 2 слайда
	},
	
	768: {
	    slidesPerView: 2, // На планшетах 2 слайда
	},
	
	850: {
	    slidesPerView: 2.5, // На планшетах 2 слайда
	},
	
	620: {
	    slidesPerView: 2, // На мобильных устройствах 1 слайд
	},
	
	500: {
	    slidesPerView: 1.5, // На мобильных устройствах 1 слайд
	},
	300: {
	    slidesPerView: 1.25, // На мобильных устройствах 1 слайд
	},
    },
});

// popup

const popup = document.getElementById('popup1');
const openPopupBtn = document.getElementById('openPopup');
const closeBtn = document.querySelector('.popup__info-btn');

if (openPopupBtn && popup && closeBtn) {
    openPopupBtn.addEventListener('click', () => {
	popup.style.display = 'flex';
    });

// Закрытие popup
    closeBtn.addEventListener('click', () => {
	popup.style.display = 'none';
    });

// Закрытие при клике за пределами popup
    popup.addEventListener('click', (e) => {
	if (e.target === popup) {
	    popup.style.display = 'none';
	}
    });
    
}

// Открытие popup

// portfolio-slider

var swiper = new Swiper(".portfolio-mySwiper", {
    slidesPerView: 3.25,
    spaceBetween: 5,
    breakpoints: {
	// Указывает настройки для экранов до 768px
	
	1024: {
	    slidesPerView: 3.25, // На планшетах 2 слайда
	},
	
	768: {
	    slidesPerView: 2, // На планшетах 2 слайда
	},
	
	700: {
	    slidesPerView: 2, // На планшетах 2 слайда
	},
	
	425: {
	    slidesPerView: 1.2, // На мобильных устройствах 1 слайд
	},
	
	375: {
	    slidesPerView: 1.2, // На мобильных устройствах 1 слайд
	},
	345: {
	    slidesPerView: 1.2, // На мобильных устройствах 1 слайд
	},
    },
});

//reviews-slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.25,
    spaceBetween: 5,
    breakpoints: {
	// Указывает настройки для экранов до 768px
	
	1024: {
	    slidesPerView: 3.25, // На планшетах 2 слайда
	},
	
	768: {
	    slidesPerView: 2, // На планшетах 2 слайда
	},
	
	700: {
	    slidesPerView: 2, // На планшетах 2 слайда
	},
	
	425: {
	    slidesPerView: 1.2, // На мобильных устройствах 1 слайд
	},
	
	375: {
	    slidesPerView: 1.2, // На мобильных устройствах 1 слайд
	},
	300: {
	    slidesPerView: 1.2, // На мобильных устройствах 1 слайд
	},
    },
});


new Swiper(".other-news-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
	300: {
	    slidesPerView: 1.2,
	},
	600: {
	    slidesPerView: 2.2,
	    spaceBetween: 30,
	},
	1100: {
	    slidesPerView: 3,
	}
    },
});

Fancybox.bind()