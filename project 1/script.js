let sel = document.querySelector("button");

let randomColor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";
  for (i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};

let changeIt = () => {
  document.body.style.backgroundColor = randomColor();
};

sel.addEventListener("click", changeIt);
