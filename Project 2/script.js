let count = 0;

let value = document.querySelector(".js");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (item) {
  item.addEventListener("click", function (val) {
    let style = val.currentTarget.classList;
    if (style.contains("Plus")) {
      count++;
    } else if (style.contains("Minus")) {
      count--;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
