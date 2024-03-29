fetch("header.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("#header").innerHTML = data));

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("#footer").innerHTML = data));

// Toggle navbar
function toggle() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("hidden");
}
function goUp() {
  const scrollTop = () => {
    if (document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -50);
      requestAnimationFrame(scrollTop);
    }
  };
  scrollTop();
}
