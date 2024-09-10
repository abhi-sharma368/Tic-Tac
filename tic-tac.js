let boxes = document.querySelectorAll(".ibox");
let rstBtn = document.querySelector("#btn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msgWin");
let gameContainer = document.querySelector("#container");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const rstgame = () => {
  turnO = true;
  enabled();
  msgContainer.classList.add("hide");
  rstBtn.classList.add("jadu");
  gameContainer.style.display = "flex";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
    rstBtn.classList.remove("jadu");
  });
});
const disabled = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabled = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations !! \n Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  gameContainer.style.display = "none";
  disabled();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newBtn.addEventListener("click", rstgame);
rstBtn.addEventListener("click", rstgame);
