let text = document.getElementById("text");
let btn = document.getElementById("btn");
let box = document.querySelectorAll(".box");
let word = null;
// if (localStorage.length > 0) {
//   box[0].innerHTML = localStorage.getItem("item");
// }
btn.onclick = function () {
  if (text.value != "") {
    box[0].innerHTML += `<p class="item" draggable="true"><input type="checkbox"><label>${text.value}</label></p> `;
    text.value = "";
    // localStorage.setItem("item", box[0].innerHTML);
  } else {
    text.value = "";
  }
  graggble();
};

function graggble() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      word = item;
      this.style.opacity = "0.5";
    });
    item.addEventListener("dragend", function () {
      word = null;
      this.style.opacity = "1";
    });
    box.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.background = "green";
      });
      box.addEventListener("dragleave", function () {
        this.style.background = "#ff4685";
      });
      box.addEventListener("drop", function () {
        this.append(word);
        this.style.background = "#ff4685";
      });
    });
  });
  // ======

  box[2].addEventListener("dragover", function () {
    this.style.transform = "scale(1.2)";
    this.style.color = "red";
    this.style.background = "transparent";
  });
  box[2].addEventListener("dragleave", function () {
    this.style.background = "transparent";
    this.style.color = "wheat";
  });
  box[2].addEventListener("drop", function () {
    this.append(word);
    word.style.display = "none";
    this.style.color = "wheat";
    this.style.background = "transparent";
  });
}
