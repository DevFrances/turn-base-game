let container = document.querySelector('.container');
let list = [];
let newlist = [];

for (let i = 0; i < container.children.length; i++) {
  list.push(container.children[i]);
}

list.sort(function(a, b) {
  return -1 + Math.random() * 3; // -1, 0, or 1
});

while (container.children.length > 0) {
  container.removeChild(container.children[0]);
}
list.forEach(function(el) {
  container.appendChild(el);
});
