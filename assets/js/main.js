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
      spaceBetween: 20, slidesPerView: 1.5,
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

        // Barcha optionlardan active olib tashlash
        options.forEach(opt => opt.classList.remove('active'));

        // Tanlangan optionga active qo‘yish
        option.classList.add('active');

        // Select konteyneriga has-selected class qo‘yish
        select.classList.add('has-selected');

        // Selectni yopish
        select.classList.remove('active');
      });
    });
  });

  // Tashqariga bosilganda barcha selectlarni yopish
  window.addEventListener('click', () => {
    document.querySelectorAll('.custom-select').forEach(select => {
      select.classList.remove('active');
    });
  });
});



try {
  function initMap() {
    const location = { lat: 25.0951, lng: 55.1581 }; // Dubai Internet City koordinatalari

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location,
      disableDefaultUI: true,

      styles: [ // Kulrang stil
        {
          "elementType": "geometry",
          "stylers": [{ "color": "#f5f5f5" }]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{ "visibility": "off" }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#616161" }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{ "color": "#f5f5f5" }]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [{ "visibility": "off" }]
        },
        {
          "featureType": "poi",
          "stylers": [{ "visibility": "off" }]
        },
        {
          "featureType": "road",
          "stylers": [{ "color": "#ffffff" }]
        },
        {
          "featureType": "water",
          "stylers": [{ "color": "#c9c9c9" }]
        }
      ]
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: {
        url: "./assets/images/point.png", // Marker iconi
      }
    });
  }
  initMap()
} catch (error) {

}


const seeMore = document.querySelector(".show-more");
if (seeMore) {
  const showTex = document.querySelector(".show-text")
  seeMore.addEventListener("click", () => {
    showTex.classList.toggle('active')
    seeMore.classList.toggle('active')
  })
}

// document.addEventListener('DOMContentLoaded', () => {
//   const scrollBtn = document.querySelector('.scroll-down');
//   const speedTable = document.querySelector('.speed-table');

//   scrollBtn.addEventListener('click', () => {
//     speedTable.scrollTo({
//       top: speedTable.scrollHeight,
//       behavior: 'smooth'
//     });
//   });
// });
// const dragBox = document.querySelector('.drag-box');
// if (dragBox) {
//   const modelsSlider2 = document.querySelector('.models-slider');
//   modelsSlider2.addEventListener('mouseenter', () => {
//     dragBox.style.opacity = '1';
//   });

//   modelsSlider2.addEventListener('mouseleave', () => {
//     dragBox.style.opacity = '0';
//   });
//   // cursor harakatini kuzatish va drag-boxni joylashtirish
//   modelsSlider2.addEventListener('mousemove', (e) => {
//     const x = e.clientX;
//     const y = e.clientY;

//     // drag-box o'rtasini cursor markaziga moslashtirish
//     const boxWidth = dragBox.offsetWidth / 2;
//     const boxHeight = dragBox.offsetHeight / 2;

//     dragBox.style.left = `${x - boxWidth}px`;
//     dragBox.style.top = `${y - boxHeight}px`;
//   });
// }


// const speedSwiper = new Swiper('.speedSwiper', {
//   direction: 'vertical',
//   slidesPerView: 'auto',
//   freeMode: true,
//   mousewheel: true,
//   scrollbar: {
//     el: null,
//   },
// });

document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.querySelector('.scroll-down');
  const speedTable = document.querySelector('.speed-table');
  let scrollInterval = null;

  if (scrollBtn && speedTable) {
    // scroll harakatini boshlovchi funksiya
    const startScrolling = () => {
      if (scrollInterval) return; // agar allaqachon scroll bo‘layotgan bo‘lsa, yangi interval ochilmasin
      scrollInterval = setInterval(() => {
        speedTable.scrollTop += 4;
      }, 10);
    };

    // scroll to‘xtatuvchi funksiya
    const stopScrolling = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
      }
    };

    // MOUSE holatlari
    scrollBtn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startScrolling();
    });

    scrollBtn.addEventListener('mouseup', stopScrolling);
    scrollBtn.addEventListener('mouseleave', stopScrolling);
    document.addEventListener('mouseup', stopScrolling); // tashqaridan qo‘yib yuborish holatiga ham

    // TOUCH holatlari
    scrollBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startScrolling();
    });

    scrollBtn.addEventListener('touchend', stopScrolling);
    document.addEventListener('touchend', stopScrolling);
  }

  // Swiper scroll (vertical)
  new Swiper('.speedSwiper', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    mousewheel: true,
    scrollbar: {
      el: null,
    },
  });

  // DRAG-BOX
  const dragBox = document.querySelector('.drag-box');
  const modelsSlider2 = document.querySelector('.models-slider');

  if (dragBox && modelsSlider2) {
    modelsSlider2.addEventListener('mouseenter', () => {
      dragBox.style.opacity = '1';
    });

    modelsSlider2.addEventListener('mouseleave', () => {
      dragBox.style.opacity = '0';
    });

    modelsSlider2.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const boxWidth = dragBox.offsetWidth / 2;
      const boxHeight = dragBox.offsetHeight / 2;
      dragBox.style.left = `${x - boxWidth}px`;
      dragBox.style.top = `${y - boxHeight}px`;
    });
  }
});

