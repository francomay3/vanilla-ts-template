const greet = (name: string) => `Hello, ${name}!`;

const div = document.createElement("div");
div.innerText = greet("World");
document.body.appendChild(div);
