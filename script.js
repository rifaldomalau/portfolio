document.addEventListener("mousemove", function (e) {
  const bgText = document.getElementById("bgText");
  const heroImage = document.getElementById("heroImage");

  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;

  bgText.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
  heroImage.style.transform = `translate(${-x}px, ${-y}px)`;
});

// ================= SENSOR SCROLL NAVBAR =================
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  // Jika layar digeser lebih dari 50 pixel ke bawah, aktifkan wujud kedua (blur)
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    // Jika kembali ke puncak (Home), matikan blurnya
    header.classList.remove("scrolled");
  }
});

// ================= JURUS RAHASIA: GULIR & REFRESH HOME =================
function goHomeAndRefresh(event) {
  event.preventDefault(); 

  // 1. MATIKAN FITUR MENGINGAT SCROLL BROWSER!
  // Ini kunci utama agar saat refresh, browser tidak menarik layar ke bawah lagi.
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // 2. Hapus jejak menu (#...) dari URL
  history.replaceState(null, null, window.location.pathname);

  // 3. Mulai gulir mulus ke atas
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  // 4. Beri waktu sedikit lebih lama (1 detik) agar guliran mulus sampai puncak
  setTimeout(() => {
    // Pastikan koordinat benar-benar 0 sebelum layar berkedip (refresh)
    window.scrollTo(0, 0); 
    window.location.reload();
  }, 1000); 
}