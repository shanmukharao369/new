console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title = 'shannu';//
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent= 'Hello';
console.log(document.forms);
console.log(document.links);
console.log(document.images);
//console.log(document.getElementById("header-title"));
const x = document.getElementById('header-title');
console.log(x);
const y = document.getElementById('main-header');
x.textContent = 'hello';
x.innerText = 'goodbye';
console.log(x.textContent);
console.log(x.innerText);
x.innerHTML = '<h3>hello</h3>';
y.style.borderBottom = 'solid 3px #000';


