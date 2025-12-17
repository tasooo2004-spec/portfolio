//صور الاولات انمشن ي تسو
const textElement = document.querySelector('.animated-text');
const text = textElement.textContent;
textElement.textContent = '';

const words = text.split(' ');

words.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word + ' '; // نضيف مسافة بين الكلمات
    span.style.animationDelay = `${index * 0.3}s`; // كل كلمة تظهر بعد الأخرى
    textElement.appendChild(span);
});






// ملف: main.js

// تهيئة سلايدر الأزياء التقليدية
const swiperFashion = new Swiper('.fashion-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false
    },
    breakpoints: {
        600: { slidesPerView: 1 },
        900: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    }
});





const audio = document.getElementById("heritageAudio");
const audioControl = document.getElementById("audioControl");

// الحالة الابتدائية: الصوت مطفّي
let isPlaying = false;

// تأكيد إن الصوت مطفّي عند فتح الموقع
window.addEventListener("load", () => {
  audio.pause();
  audio.currentTime = 0;
  audioControl.classList.remove("fa-volume-high");
  audioControl.classList.add("fa-volume-xmark");
});

// التحكم في التشغيل
audioControl.addEventListener("click", () => {
  if (!isPlaying) {
    // تشغيل الصوت
    audio.play();
    audioControl.classList.remove("fa-volume-xmark");
    audioControl.classList.add("fa-volume-high");
    isPlaying = true;
  } else {
    // إيقاف الصوت
    audio.pause();
    audio.currentTime = 0;
    audioControl.classList.remove("fa-volume-high");
    audioControl.classList.add("fa-volume-xmark");
    isPlaying = false;
  }
});






//JavaScript لتخزين البيانات ===== -->

let opinions = JSON.parse(localStorage.getItem("opinions")) || [];

const form = document.getElementById("footerForm");
const emailInput = document.getElementById("emailInput");
const opinionInput = document.getElementById("opinionInput");
const showBtn = document.getElementById("showOpinions");
const container = document.getElementById("opinionsContainer");
const list = document.getElementById("opinionsList");
const searchInput = document.getElementById("searchInput");

/* حفظ الرأي */
form.addEventListener("submit", e=>{
  e.preventDefault();

  opinions.push({
    email: emailInput.value,
    text: opinionInput.value
  });

  localStorage.setItem("opinions", JSON.stringify(opinions));
  form.reset();
  alert("تم حفظ رأيك");
});

/* إظهار الصندوق */
showBtn.addEventListener("click", ()=>{
  container.style.display = "block";
  renderOpinions();
});

/* البحث */
searchInput.addEventListener("input", renderOpinions);

function renderOpinions(){
  const q = searchInput.value.toLowerCase();
  list.innerHTML = "";

  opinions
    .filter(o =>
      o.email.toLowerCase().includes(q) ||
      o.text.toLowerCase().includes(q)
    )
    .forEach(o=>{
      list.innerHTML += `
        <div class="opinion-box">
          <strong>${o.email}</strong>
          <p>${o.text}</p>
        </div>
      `;
    });
}


const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});



