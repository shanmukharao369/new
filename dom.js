const items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello';
items[2].style.backgroundColor = 'green';
for (var i = 0; i<items.length;i++){
    items[i].style.backgroundColor='#f0f0f0';
}
for (var i = 0; i<items.length;i++){
    items[i].style.fontWeight= 'bold';
}

    


