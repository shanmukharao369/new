//traversing the dom
var itemslist = document.querySelector('#items');
//parent node
console.log(itemslist.parentNode);
itemslist.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemslist.parentNode.parentNode.parentNode);
//parentelement
console.log(itemslist.parentElement);
itemslist.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemslist.parentElement.parentElement.parentElement);
//childnode
console.log(itemslist.childNodes);
console.log(itemslist.children);
console.log(itemslist.children[1]);
itemslist.children[1].style.backgroundColor='green';
//firstchild
console.log(itemslist.firstChild);
//firstelementchild
console.log(itemslist.firstElementChild);
itemslist.firstElementChild.textContent='Hello';
//lastchild
console.log(itemslist.lastChild);
//lastelementchild
console.log(itemslist.lastElementChild);
itemslist.lastElementChild.textContent='Hii';
//nextsibling
console.log(itemslist.nextSibling);
//nextelementsibling
console.log(itemslist.nextElementSibling);
//previoussibling
console.log(itemslist.previousSibling);
//previouselementsibling
console.log(itemslist.previousElementSibling);
itemslist.previousElementSibling.style.color = 'blue';
//createelement
//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add Id
newDiv.id='hello 1';
//add attribute
newDiv.setAttribute('title','helloDiv');
//create text node
var newDivtext = document.createTextNode('Hello world');
//add text to div
newDiv.appendChild(newDivtext);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);

// first way to add hello world before item 1
var newitems = document.getElementById('items');
var li = document.createElement('li');
li.textContent='Hello World';
newitems.insertBefore(li,newitems.firstElementChild);

// second way to add hello world before item 1
var newitems1 = document.getElementById('items');
var helloli = document.createElement('li');
//var newitemtext = document.createTextNode('Hello world');
//newitems1.appendChild(newitemtext);
newitems1.innerHTML = '<li>Hello world 1</li>'+newitems1.innerHTML