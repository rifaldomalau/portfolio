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

// MANTRA PENYUNTIKAN FILE HTML EKSTERNAL
document.addEventListener("DOMContentLoaded", () => {
  fetch("techstack.html")
    .then((response) => {
      if (!response.ok) throw new Error("File senjata gagal dimuat.");
      return response.text();
    })
    .then((data) => {
      document.getElementById("techstack-container").innerHTML = data;
    })
    .catch((error) => console.error("Peringatan Matriks:", error));
});
