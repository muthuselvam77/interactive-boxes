
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") return;

    boxes.forEach(b => {
      if (b !== box) {
        b.classList.remove("expanded", "small", "medium", "large");
        b.style.backgroundColor = "#ffffff";
      }
    });

    this.classList.toggle("expanded");
  });

  box.querySelectorAll(".color-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      box.style.backgroundColor = btn.dataset.color;
    });
  });

  box.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      box.classList.remove("small", "medium", "large");
      box.classList.add(btn.dataset.size);
    });
  });
});
