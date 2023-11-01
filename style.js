const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
// -----------------------------------------------------------------
// let para = document.getElementsByClassName("para");
let plus = document.getElementById("plus");
let inp = document.getElementById("inputValu");
let boxs = document.querySelectorAll(".your_sprint");
let bx_test = document.getElementById("bx_test");
let drag = null;
plus.onclick = function () {
  if (inp.value != "") {
    bx_test.innerHTML += `<p class="item" draggable="true">${inp.value}</p>`;
    inp.value = "";
  }
  dragItem();
};
function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      console.log("drag start");
    });

    item.addEventListener("dragend", function () {
      drag = null;
      console.log("drag end");
    });
    boxs.forEach((even) => {
      even.addEventListener("dragover", function (event) {
        event.preventDefault();
        this.style.background = "rgba(0, 0, 0, 0.04)";
        this.style.color = "rgba(0, 0, 0, 0.7)";
      });
      even.addEventListener("dragleave", function () {
        this.style.background = "white ";
        this.style.color = "rgba(0, 0, 0, 0.721)";
      });
      even.addEventListener("drop", function () {
        this.append(drag);
        this.style.background = "white ";
        this.style.color = "rgba(0, 0, 0, 0.721)";
      });
    });
  });
}

// input
function toggleElement() {
  var element = document.getElementById("myElement");

  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
function aficher() {
  let items = document.getElementById("bx_test");
  if (items.style.display === "none") {
    items.style.display = "block";
  } else {
    items.style.display = "none";
  }
}
function shin() {
  let sin = document.getElementById("your_sprint");
  if (sin.style.display === "none") {
    sin.style.display = "block";
  } else {
    sin.style.display = "none";
  }
}

// function drop(event) {
//   event.preventDefault();
// }
// function allowDrop(event) {
//   event.dataTransfer.setData("text/html", event.target.id);
// }
// function drag(event) {
//   console.log("drag start");
//   var data = event.dataTransfer.getData("text/html");
//   event.target.appendChild(document.getElementById("your_sprint"));
// }
