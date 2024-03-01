import myImage from "../public/images/screenshot.png";

const greet = (name: string) => `Hello, ${name}!`;

const div = document.createElement("div");
div.innerText = greet("World");
document.body.appendChild(div);

const img = new Image();
img.src = myImage;
document.body.appendChild(img);
