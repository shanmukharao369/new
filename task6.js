//queryselector
const header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';
const input = document.querySelector('input');
input.value = 'Hello world';
const submit = document.querySelector('input[type="submit"]');
submit.value = "SEND"
const items = document.querySelector('.list-group-item');
items.style.color = "red";
const lastitems = document.querySelector('.list-group-item:last-child');
lastitems.style.color="blue";
const seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor="green";
const sec = document.querySelector('.list-group-item:nth-child(3)');
sec.style.display='none';
//queryselectorall
const titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';
const list = document.querySelectorAll('.list-group-item');
list[1].style.color = 'green';
const odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
}

