const container = document.querySelector("#container");

const width = container.clientWidth;

const buttonGo = document.querySelector("#btn-go");
const buttonClear = document.querySelector("#btn-clear");
const rowColValue = document.querySelector("#rowcolvalue");
const errorMsg = document.querySelector(".error-msg");

buttonGo.addEventListener("click", () => {
    // console.log(rowColValue.value);
    if (rowColValue.value > 100) {
        errorMsg.textContent = "Please enter number between 0 to 100";
    }
    else {
        removeExistingGrid();
        errorMsg.textContent = "";
        displayGrid(rowColValue.value);
    }
});

buttonClear.addEventListener("click", () => {
    clearGrid();
})

const displayGrid = (rowCol) => {
    for (i = 0; i < rowCol; i++) {
        const row = document.createElement("div");
        row.classList.add("row")
        for (j = 0; j < rowCol; j++) {
            const col = document.createElement("div");
            col.classList.add("col");
            col.addEventListener("mouseover", () => {
                col.style.backgroundColor = "black";
                // let op = window.getComputedStyle(col).getPropertyValue("opacity");
                // console.log("op: ", op);
                // let newop = 0.3 + parseFloat(op);
                // console.log("newop: ", newop);
                // col.style.opacity = newop;
            });
            // div.setAttribute("style", "width:30px; height:30px; border: 1px solid blue;");
            // container.appendChild(div);
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

const removeExistingGrid = () => {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        container.removeChild(row);
    });
}

const clearGrid = () => {
    const cols = document.querySelectorAll(".col");
    cols.forEach((col) => {
        col.style.backgroundColor = "white";
    });
}

displayGrid(16);