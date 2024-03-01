import store from "@src/global-state";
import "./style.scss";
import style from "./style.scss";

console.log(style);

const CounterContainer = () => {
  const container = document.createElement("div");
  container.id = "counter-container";

  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.type = "button";
  remove.onclick = () => {
    store.count.set(store.count.current - 1);
  };
  container.appendChild(remove);

  const count = document.createElement("p");
  count.textContent = `Count: ${store.count.current}`;
  container.appendChild(count);

  store.count.subscribe((state) => {
    count.textContent = `Count: ${state}`;
  });

  const add = document.createElement("button");
  add.textContent = "Add";
  add.type = "button";
  add.onclick = () => {
    store.count.set(store.count.current + 1);
  };
  container.appendChild(add);

  return container;
};

export default CounterContainer;
