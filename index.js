let boxs = document.querySelectorAll(".box")
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg")

let turn0 = true;

const winning = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winning) {
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                msg.innerText = `Winner is ${pos1}`;

                boxs.forEach((box) => {
                    box.disabled = true;
                })

            }
        }
    }

};

reset.addEventListener("click", () => {
    boxs.forEach((box) => {
        box.innerText = "";
        msg.innerText = "";
        boxs.forEach((box) => {
            box.disabled = false;
        })
    })
})