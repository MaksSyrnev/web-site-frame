console.log('привет');

let element = document.createElement('div');
let p = 0;
for (index in element.style)
  p++;

console.log(p);
console.log(typeof (element));
