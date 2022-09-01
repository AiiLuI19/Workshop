const elTable = document.querySelector(".tabs__unread");
const elUtil = document.querySelector(".header-table__icon");
const elDelete = document.querySelector(".btn-text");
const elInput = document.querySelectorAll(".tabs__checkbox");

elTable.addEventListener("click", activeCheckbox);

function activeCheckbox(e) {
  if (e.target.classList.contains("tabs__checkbox")) {
    let arr;
    elInput.forEach((el) => {
      if (el.checked) {
        arr = el.checked;
      }
    });

    if (arr) {
      elDelete.classList.add("active-checked");
      return elUtil.classList.add("active-checked");
    } else {
      elDelete.classList.remove("active-checked");
      return elUtil.classList.remove("active-checked");
    }
  }
}
