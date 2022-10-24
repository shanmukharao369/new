var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
//delete event
itemlist.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItems);
//additem
function addItem(e){
    e.preventDefault();

    //get input value
    var newitem = document.getElementById('item').value;
    var description = document.getElementById('description').value;

    //creat new li elementh
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //console.log(li);
    // add text node  with input value
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(document.createTextNode(" " +description));
    //create del button element
    var deletebtn= document.createElement('button');
    //add classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deletebtn.appendChild(document.createTextNode('x'));

    var editBtn = document.createElement("button");
    editBtn.className = "float-right Edit button";
    editBtn.appendChild(document.createTextNode("Edit"));


    //append button to li
    li.appendChild(deletebtn);
    // append li to list
    itemlist.appendChild(li);
    // append edit button
    li.appendChild(editBtn);

    

}
//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

function filterItems(e){
    //conver text to lowercase
    var text = e.target.value.toLowerCase();
    //get lis
    var items=itemlist.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
       var itemName = item.firstChild.textContent;
       var description = item.childNodes[1].textContent;
       if(itemName.toLocaleLowerCase().indexOf(text)!=-1 || description.toLocaleLowerCase().indexOf(text)!=-1){
        item.style.display='block'; 
       }else{
        item.style.display='none';
       }
    })
    
}