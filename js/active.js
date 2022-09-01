const elItem = document.querySelector(".tabs__item");
const elItemArchive = document.querySelector(".tabs__item-archive");

const elTabFirst = document.querySelector("#tab_01");
const elTabSecond = document.querySelector("#tab_02");

elItem.addEventListener("click", activePage);
elItemArchive.addEventListener("click", activePage);

function activePage(e) {
  e.preventDefault();

  if (e.srcElement.classList.contains("tabs__item--active")) {
    return;
  }
  elItem.classList.toggle("tabs__item--active");
  elItemArchive.classList.toggle("tabs__item--active");

  elTabFirst.classList.toggle("tabs__table--active");
  elTabSecond.classList.toggle("tabs__table--active");
}
