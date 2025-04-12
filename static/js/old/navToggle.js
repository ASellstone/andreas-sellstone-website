export default function initNavToggle() {
  const icon = document.querySelector(".topnav .icon");
  const links = document.getElementById("myLinks");
  const iconI = icon?.querySelector("i");

  if (icon && links && iconI) {
    icon.addEventListener("click", () => {
      const isShown = links.classList.contains("show");
      links.classList.toggle("show");
      iconI.classList.toggle("fa-bars", isShown);
      iconI.classList.toggle("fa-xmark", !isShown);
    });
  }
}
