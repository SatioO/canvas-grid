// Import stylesheets
import "./style.css";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 8;
canvas.height = window.innerHeight - 8;

function getCanvasProperties() {
  return { width: canvas.width, height: canvas.height };
}

function drawViewport(padding = 0) {
  const properties = getCanvasProperties();
  const x = properties.width / 100 * padding;
  const y = properties.height / 100 * padding;
  const width = properties.width - (x * 2);
  const height = properties.height - (x * 2);

  // ctx.fillStyle = "green";
  // ctx.strokeStyle = "red";
  // ctx.lineWidth = 0.2;
  // ctx.strokeRect(x, y, width, height);

  return { x, y, width, height}
}

function drawXAxis(viewport, stride = 5, width = 0.5, color = "#333") {
  const strides = (100 / stride);
  const margin = viewport.width / strides;
  
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.strokeStyle = color;

  for(let i = 0; i <= strides; i++) {
    ctx.moveTo(viewport.x + margin * i, viewport.y);
    ctx.lineTo(viewport.x + margin * i, viewport.height + (viewport.y));
  }
  
  ctx.stroke();
}

function drawYAxis(viewport, stride = 5, width = 0.5, color = "#333") {
  const strides = (100 / stride);
  const margin = viewport.height / strides;
  
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.strokeStyle = color;

  for(let i = 0; i <= strides; i++) {
    ctx.moveTo(viewport.x, viewport.y + margin * i);
    ctx.lineTo(viewport.width + (viewport.x), viewport.y + margin * i);
  }
  
  ctx.stroke();
}

const viewport = drawViewport(5);
drawXAxis(viewport)
drawYAxis(viewport)
