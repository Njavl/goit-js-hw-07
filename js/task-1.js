let categories = document.querySelector("#categories");
console.dir(categories);
let items = Array.from(categories.querySelectorAll(`.item`));
let countItems = items.length;
console.log(items);
console.log(`Number of categories: ${countItems}`);

items.map((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
