import favicon from "@images/favicon.ico";
import "@public/styles.scss";
import Counter from "./Components/Counter/Counter";
import Cart from "./Components/Cart";

const body = document.body;

let link = document.createElement("link");
link.rel = "icon";
link.href = favicon;
document.head.appendChild(link);

let title = document.createElement("h1");
title.textContent = "Hello World";
body.appendChild(title);

body.appendChild(Counter());

let title2 = document.createElement("h3");
title2.textContent = "Some other component using the same global state";
body.appendChild(title2);

body.appendChild(Cart());
