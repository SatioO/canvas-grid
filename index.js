// Import stylesheets
import "./style.css";

//get DPI
let dpi = window.devicePixelRatio;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.setAttribute("height", canvas.clientHeight * dpi);
canvas.setAttribute("width", canvas.clientWidth * dpi);

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

function drawXAxis(viewport, stride = 5, width = 0.4, color = "#333") {
  const strides = (100 / stride);
  const margin = viewport.width / strides;
  
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.setLineDash([6, 6]);

  for(let i = 0; i <= strides; i++) {
    ctx.moveTo(viewport.x + margin * i, viewport.y);
    ctx.lineTo(viewport.x + margin * i, viewport.height + (viewport.y));
  }
  
  ctx.stroke();
}

function drawYAxis(viewport, stride = 5, width = 0.4, color = "#333") {
  const strides = (100 / stride);
  const margin = viewport.height / strides;
  
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.setLineDash([6, 6]);

  for(let i = 0; i <= strides; i++) {
    ctx.moveTo(viewport.x, viewport.y + margin * i);
    ctx.lineTo(viewport.width + (viewport.x), viewport.y + margin * i);
  }
  
  ctx.stroke();
}

const viewport = drawViewport(5);
drawXAxis(viewport, 10);
drawYAxis(viewport, 10);

