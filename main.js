var canva = document.querySelector("#canva")
var canvaContext = canva.getContext("2d")

//to set the current device width and height
canva.width = screen.width;
canva.height = screen.height;

let lineStartX = 0
let lineStartY = 0
let isDrawing = false;
let lineWidthFlag = true;
let hue = 0;
canvaContext.lineWidth = 65
canvaContext.lineCap = "round";
canvaContext.lineJoin = 'miter'

function draw(e) {
    if (!isDrawing) return;

    canvaContext.strokeStyle = `hsl(${hue}, 100%, 50%)`
    canvaContext.beginPath();
    canvaContext.moveTo(lineStartX, lineStartY);
    canvaContext.lineTo(e.offsetX, e.offsetY);
    canvaContext.stroke();
    lineStartX = e.offsetX;
    lineStartY = e.offsetY;
    if (hue < 360)
        hue++;
    else
        hue = 0;

    if (canvaContext.lineWidth >= 65 || canvaContext.lineWidth <= 5)
        lineWidthFlag = !lineWidthFlag

    if (lineWidthFlag)
        canvaContext.lineWidth++;
    else
        canvaContext.lineWidth--;
    console.log(canvaContext.lineWidth)
}
canva.addEventListener("mousedown", (e) => {
    isDrawing = true
    lineStartX = e.offsetX;
    lineStartY = e.offsetY;
})
canva.addEventListener("mousemove", draw)
canva.addEventListener("mouseup", () => isDrawing = false)
