//certificate.js

function openLightbox(element) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const clickedImg = element.querySelector("#card-img-preview");

  if (clickedImg) {
    lightboxImg.src = clickedImg.src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox(event) {
  // Fungsi ini dipanggil hanya jika area latar belakang diklik (event.target == lightbox),
  // bukan gambarnya itu sendiri.
  if (event.target === event.currentTarget) {
    forceCloseLightbox();
  }
}

function forceCloseLightbox() {
  // Jalur paksa untuk menutup, digunakan oleh tombol X dan Esc
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");

  // Kembalikan scroll body
  document.body.style.overflow = "auto";
}

// Protokol Darurat: Tutup dengan tombol Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") forceCloseLightbox();
});
