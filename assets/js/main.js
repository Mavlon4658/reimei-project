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
const fixeBar = document.querySelector('.header-top');
const header = document.querySelector('.header');

headerBars.onclick = () => {
  menu.classList.toggle('active');
  headerBars.classList.toggle('active');
  fixeBar.classList.toggle('active');
  header.classList.toggle('active');
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
  speed: 800,

  navigation: {
    nextEl: '.home-bottom__right .next-btn',
    prevEl: '.home-bottom__right .prev-btn',
  },
  breakpoints: {
    1300: {
      loop: true,
    },
    0: {
      loop: false,
      spaceBetween: 50,

    }
  }
})

const modelsSlider = new Swiper('.models-slider', {
  slidesPerView: 1.9,
  speed: 800,
  spaceBetween: 80,
  breakpoints: {
    1200: {
      spaceBetween: 80,
      slidesPerView: 1.9,
    },
    992: {
      spaceBetween: 20,slidesPerView: 1.5,
    },
    0: {
      spaceBetween: 20,
      slidesPerView: 1.3,
    }
  }
})

try {
  if (homeSwp) {
    const swpFraction = document.querySelector('.home-bottom__right .swp-fraction');
    swpFraction.innerHTML = `<span>${homeSwp.realIndex < 9 ? '0' + (homeSwp.realIndex + 1) : (homeSwp.realIndex + 1)} /</span> ${homeSwp.slides.length < 9 ? '0' + homeSwp.slides.length : homeSwp.slides.lengt}`
    homeSwp.on('slideChange', function (e) {
      swpFraction.innerHTML = `<span>${homeSwp.realIndex < 9 ? '0' + (homeSwp.realIndex + 1) : (homeSwp.realIndex + 1)} /</span> ${homeSwp.slides.length < 9 ? '0' + homeSwp.slides.length : homeSwp.slides.lengt}`
    });
  }
} catch (error) {

}
const playBtn = document.getElementById('play-btn');
if (playBtn) {

  playBtn.addEventListener('click', function () {
    const videoContainer = document.querySelector('.work-video');
    videoContainer.innerHTML = `
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/t0Q2otsqC4I?autoplay=1&mute=1&playsinline=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  `;
  });
}

// custom select
document.addEventListener('DOMContentLoaded', () => {
  const selects = document.querySelectorAll('.custom-select');

  selects.forEach(select => {
    const head = select.querySelector('.select-head');
    const options = select.querySelectorAll('.select-option');
    const selectedText = select.querySelector('.selected-text');

    // Selectni ochish/yopish
    head.addEventListener('click', (e) => {
      e.stopPropagation();
      // Boshqa selectlardan active olib tashlash
      selects.forEach(s => {
        if (s !== select) s.classList.remove('active');
      });
      select.classList.toggle('active');
    });

    // Har bir option uchun bosish hodisasi
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        // Tanlangan textni yangilash
        selectedText.textContent = option.textContent;

        // Active klassni optionlar orasida faqat tanlangan optionga qo'yish
        options.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Selectni yopish
        select.classList.remove('active');
      });
    });
  });

  // Tashqariga bosilganda barcha selectlarni yopish
  window.addEventListener('click', () => {
    selects.forEach(select => select.classList.remove('active'));
  });
});
