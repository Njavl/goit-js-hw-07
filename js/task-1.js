const categories = document.querySelector("#categories");
console.dir(categories);
const items = Array.from(categories.querySelectorAll(`.item`));
const countItems = items.length;
console.log(items);
console.log(`Number of categories: ${countItems}`);

items.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
