export function initChevronRotation(collapseId, iconId) {
  const collapseElement = document.getElementById(collapseId);
  const arrowIcon = document.getElementById(iconId);

  if (!collapseElement || !arrowIcon) return;

  collapseElement.addEventListener('show.bs.collapse', () => {
    arrowIcon.classList.remove('down');
    arrowIcon.classList.add('up');
  });

  collapseElement.addEventListener('hide.bs.collapse', () => {
    arrowIcon.classList.remove('up');
    arrowIcon.classList.add('down');
  });
}