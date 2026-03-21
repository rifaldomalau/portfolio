document.addEventListener("mousemove", function (e) {
  const bgText = document.getElementById("bgText");
  const heroImage = document.getElementById("heroImage");

  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;

  bgText.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
  heroImage.style.transform = `translate(${-x}px, ${-y}px)`;
});
