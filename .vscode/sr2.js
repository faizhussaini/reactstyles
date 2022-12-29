var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')
//fliter
filter.addEventListener('keyup',filteritems)


// delete
itemList.addEventListener('click',removeitem) 

form.addEventListener('submit',additem);
function additem(e){
    e.preventDefault();
var newitem= document.getElementById('item').value;
var li = document.createElement('li')
li.className= 'list-group-items'
li.appendChild(document.createTextNode(newitem))

var deletebtn = document.createElement('button');
deletebtn.className= ' btn btn-danger btn-sm float-right delete'
deletebtn.appendChild(document.createTextNode('x'))
li.appendChild(deletebtn)
 
itemList.appendChild(li)
}

//
function removeitem(e){
   if(e.target.classList.contains('delete')){
    if(confirm('are you sure')){
        var li = e.target.parentElement;
        itemList.removeChild(li)
    }
   }
}
function filteritems(e){
var text= e.target.value.toLowerCase();
var items = itemList.getElementsByTagName('li')
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'black'
    }else{
        item.style.display='none';
    }
})
}


let clkbutton = document.getElementById('btn')
clkbutton.addEventListener('click',function clicked(){
    console.log('clicked')
})
function loading(){
    console.log('loading')
}