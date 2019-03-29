// When you click a div, it will place the piece.
// When you hover a cell, it will light up with green color.
// If the cell is already occupied, it will light up with red color.
var boxes = document.querySelectorAll(".cell");
// const colors = ['red', 'blue', 'yellow', 'green']
// for (let index = 0; index < boxes.length; index++) {
//     const box = boxes[index]
//     const randomColorIndex = Math.floor(Math.random() * colors.length)
//     //CSS background-color.
//     box.style.backgroundColor = colors[randomColorIndex]
// }
var player1 = "X";
var player2 = "O";
var currentPiece = player1;
var _loop_1 = function (index) {
    var box = boxes[index];
    box.addEventListener('click', function () {
        console.log("Box# " + index + " was clicked. " + index * 2);
        box.innerHTML = "<span>" + currentPiece + "</span>";
    });
};
for (var index = 0; index < boxes.length; index++) {
    _loop_1(index);
}
