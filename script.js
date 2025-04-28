const theme = document.getElementById("theme-switcher");

// Efek scroll pada navbar
window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    theme.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    theme.classList.remove("scrolled");
  }
};

// Theme switcher
document
  .getElementById("theme-switcher")
  .addEventListener("change", function (e) {
    const body = document.body;
    body.classList.remove("dark-mode", "pastel-mode");

    if (e.target.value === "dark") {
      body.classList.add("dark-mode");
    } else if (e.target.value === "pastel") {
      body.classList.add("pastel-mode");
    } else {
      body.style.backgroundColor = "#f3e1d0"; // Default light (coklat muda)
      body.style.color = "#333";
    }
  });

function scrollBerita(direction) {
  const carousel = document.getElementById("berita-carousel");
  const scrollAmount = 300;
  if (direction === "left") {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

function handleSearch(event) {
  event.preventDefault(); // mencegah reload
  const input = document.getElementById("search-input").value.trim();
  if (input !== "") {
    alert("Anda mencari: " + input);
  } else {
    alert("Silakan masukkan kata kunci pencarian.");
  }
}

// Bagian Rizal
function openModalweb(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModalweb(id) {
  document.getElementById(id).style.display = 'none';
}

// Bagian Arif
const scrollTopBtn = document.getElementById("scrollTopBtn");
const iconImg = scrollTopBtn.querySelector("img");

// Atur gambar default saat awal
iconImg.src = "imgRizal/kursor-off.png";

// Klik → scroll ke atas
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hover → ganti gambar + perbesar
scrollTopBtn.addEventListener("mouseenter", () => {
  iconImg.src = "imgRizal/kursor-on.png";
  scrollTopBtn.style.transform = "scale(1.5)";
});

// Keluar hover → kembali ke gambar default
scrollTopBtn.addEventListener("mouseleave", () => {
  iconImg.src = "imgRizal/kursor-off.png";
  scrollTopBtn.style.transform = "scale(1)";
});

// Bagian Ridho
function openModal(imageSrc) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalVid = document.getElementById('modal-video');

  modal.classList.remove('hidden');
  modalImg.style.display = 'block';
  modalVid.style.display = 'none';
  modalImg.src = imageSrc;
}

function playVideo(videoUrl) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalVid = document.getElementById('modal-video');

  modal.classList.remove('hidden');
  modalVid.style.display = 'block';
  modalImg.style.display = 'none';
  modalVid.src = videoUrl;
}

function closeModal() {
  const modal = document.getElementById('modal');
  const modalVid = document.getElementById('modal-video');

  modal.classList.add('hidden');
  modalVid.src = ''; // Reset video
}

const toggle = document.querySelector('.social-icon.left');

toggle.addEventListener("click", function(){
  toggle.parentElement.classList.toggle('active');
});

  // Gambar untuk slideshow "Lihat Semua Foto"
  const slideshowImages = [
    "img/photo1.jpeg",
    "img/photo2.jpeg",
    "img/photo3.jpg",
    "img/photo4.jpg",
    "img/photo5.jpeg"
  ];

  const videoThumbs = [
    ["img/photo4.jpg", "Gowes Bersama Forkopimda", "https://www.youtube.com/embed/IKkdZhAZWhI?si=SNyh0-W9BqFW2nmQ?autoplay=1"],
    ["img/photo6.png", "Indonesia Bagus Kudus", "https://www.youtube.com/embed/aBQaejnQz5c?si=pq840MQiH5CFFT3J?autoplay=1"],
    ["img/photo7.png", "Animasi 3D Waduk Logung", "https://www.youtube.com/embed/T0oTPoN1zvA?si=mY-_pbIdapVjqq1u?autoplay=1"]
  ]

  let currentSlideImage = 0;
  let currentSlideVideo = 0;
  const slideshowElement = document.getElementById("photoSlideshow");
  const videoSlideshow = document.getElementById("videoSlideshow");
  const videoButton = videoSlideshow.querySelector("button");
  const imageButton = slideshowElement.querySelector("button");
  const videoCaption = videoSlideshow.querySelector("h3");
  let videoUrl = "https://www.youtube.com/embed/IKkdZhAZWhI?si=SNyh0-W9BqFW2nmQ?autoplay=1";
  let imageUrl = "img/photo1.jpeg";

  function updateSlideshow() {
    currentSlideImage = (currentSlideImage + 1) % slideshowImages.length;
    slideshowElement.style.backgroundImage = `url('${slideshowImages[currentSlideImage]}')`;
    imageUrl = slideshowImages[currentSlideImage];
  }

  videoButton.addEventListener("click", function(){
    playVideo(videoUrl);
  })
  imageButton.addEventListener("click", function(){
    openModal(imageUrl);
  })

  function updateVideo() {
    currentSlideVideo = (currentSlideVideo + 1) % videoThumbs.length;
    videoSlideshow.style.backgroundImage = `url('${videoThumbs[currentSlideVideo][0]}')`;
    videoCaption.innerHTML = videoThumbs[currentSlideVideo][1];
    videoUrl = videoThumbs[currentSlideVideo][2];
  }

  // Ganti gambar tiap 4 detik
  setInterval(updateSlideshow, 4000);
  setInterval(updateVideo, 5000);

  // Bagian Ica
  function scrollBerita(direction) {
    const carousel = document.getElementById("berita-carousel");
    const scrollAmount = 300;
    if (direction === "left") {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
  
  function handleSearch(event) {
    event.preventDefault(); // mencegah reload
    const input = document.getElementById("search-input").value.trim();
    if (input !== "") {
      alert("Anda mencari: " + input);
    } else {
      alert("Silakan masukkan kata kunci pencarian.");
    }
  }

  const navLink = document.querySelectorAll(".nav-links a");
  const displayMenu = document.querySelector('.display');
  navLink.forEach((e) => {
    e.addEventListener("click", () => {
      displayMenu.innerHTML = e.textContent;
    })
  })

  
