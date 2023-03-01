var submit = document.querySelector('#btn')
submit.addEventListener('click',add)
function add(e){
   e.preventDefault();
   
   var newelem=document.getElementById('input').value
   var space = document.querySelector('#h')
   console.log(newelem)
   localStorage.setItem('input',newelem)
   space.innerText= localStorage.getItem('input')
    console.log(localStorage.getItem('input'))
     space.innerText= localStorage.getItem('input')
     space.style.color='red'
     if(newelem==''){
        console.log('error')
        alert('enter something!')
     }
}
localStorage.removeItem('input')