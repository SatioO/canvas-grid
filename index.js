// Import stylesheets
import "./style.css";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 8;
canvas.height = window.innerHeight - 8;

function getCanvasProperties() {
  return { width: canvas.width, height: canvas.height };
}

function round(value) {
  return Math.round(value)
}

function drawViewport(padding = 0) {
  const properties = getCanvasProperties();
  const x = properties.width / 100 * padding;
  const y = properties.height / 100 * padding;
  const width = properties.width - (x * 2);
  const height = properties.height - (x * 2);

  return { x, y, width, height}
}

function drawXAxis(viewport, stride = 5, width = 1, color = "#777") {
  const strides = (100 / stride);
  const margin = viewport.width / strides;
  
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.strokeStyle = color;

  for(let i = 0; i <= strides; i++) {
    ctx.moveTo(round(viewport.x + margin * i) + 0.5, viewport.y);
    ctx.lineTo(round(viewport.x + margin * i) + 0.5, viewport.height + (viewport.y));
  }
  
  ctx.stroke();
}

function drawYAxis(viewport, stride = 5, width = 1, color = "#777") {
  const strides = (100 / stride);
  const margin = viewport.height / strides;
  
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.strokeStyle = color;

  for(let i = 0; i <= strides; i++) {
    ctx.moveTo(viewport.x, round(viewport.y + margin * i) + 0.5);
    ctx.lineTo(viewport.width + (viewport.x), round(viewport.y + margin * i) + 0.5);
  }
  
  ctx.stroke();
}

window.addEventListener("resize", (e) => {
  canvas.width = window.innerWidth - 8;
  canvas.height = window.innerHeight - 8;

  const viewport = drawViewport(5);
  drawXAxis(viewport)
  drawYAxis(viewport)
})

const viewport = drawViewport(5);
drawXAxis(viewport);
drawYAxis(viewport);
