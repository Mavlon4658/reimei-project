const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const headerBars = document.querySelector('.header-bars');
const menu = document.querySelector('.menu');

headerBars.onclick = () => {
    menu.classList.toggle('active');
    headerBars.classList.toggle('active');
}

const popularSwp = new Swiper('.popular-swp .swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.popular-swp .btn-next',
        prevEl: '.popular-swp .btn-prev',
    },
    breakpoints: {
        1550: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        }
    }
})

const homeSwp = new Swiper('.home-swp .swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    navigation: {
        nextEl: '.home-bottom__right .next-btn',
        prevEl: '.home-bottom__right .prev-btn',
    }
})

if (homeSwp) {
    const swpFraction = document.querySelector('.home-bottom__right .swp-fraction');
    swpFraction.innerHTML = `<span>${homeSwp.realIndex < 9 ? '0' +( homeSwp.realIndex+1) : ( homeSwp.realIndex+1)} /</span> ${homeSwp.slides.length < 9 ? '0' + homeSwp.slides.length : homeSwp.slides.lengt}`
    homeSwp.on('slideChange', function (e) {
        swpFraction.innerHTML = `<span>${homeSwp.realIndex < 9 ? '0' +( homeSwp.realIndex+1) : ( homeSwp.realIndex+1)} /</span> ${homeSwp.slides.length < 9 ? '0' + homeSwp.slides.length : homeSwp.slides.lengt}`
    });
}