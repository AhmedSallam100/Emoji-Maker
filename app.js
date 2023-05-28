let emoji = document.querySelector(".emoji");
let eyes = document.querySelector(".eyes");
let eyebrows = document.querySelector(".eyebrows");
let mouth = document.querySelector(".mouth");
let colorBtn = document.querySelector("#color");
let eyeBtn = document.querySelector("#eye");
let eyebrowsBtn = document.querySelector("#eyebrows");
let mouthBtn = document.querySelector("#mouth");
let allBtns = document.querySelectorAll(".btns-container button");
let colors = ["#31e768", "#4bb4ff", "#ff702e", "#b88cff", "#ffd21f"];
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

let totalCounts = {
  eyeCount: 5,
  eyebrowsCount: 4,
  mouthCount: 5,
};

colorBtn.addEventListener("click", () => {
  emoji.style.backgroundColor = colors[count1];
  document.body.style.backgroundColor = colors[count1];
  allBtns.forEach((btn) => {
    btn.style.backgroundColor = colors[count1];
  });
  count1 = count1 < colors.length - 1 ? count1 + 1 : 0;
});

eyeBtn.addEventListener("click", () => {
  eyes.setAttribute("src", `imgs/eye-${count2}.svg`);
  count2 = count2 < totalCounts.eyeCount - 1 ? count2 + 1 : 0;
});

eyebrowsBtn.addEventListener("click", () => {
  eyebrows.setAttribute("src", `imgs/eyebrow-${count3}.svg`);
  count3 = count3 < totalCounts.eyebrowsCount - 1 ? count3 + 1 : 0;
});

mouthBtn.addEventListener("click", () => {
  mouth.setAttribute("src", `imgs/mouth-${count4}.svg`);
  count4 = count4 < totalCounts.mouthCount - 1 ? count4 + 1 : 0;
});
