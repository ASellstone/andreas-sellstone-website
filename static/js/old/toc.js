export default function initTOC() {
  document.querySelectorAll(".toc").forEach(toc => {
    toc.addEventListener("click", () => {
      toc.classList.toggle("expanded");
    });
  });
}
