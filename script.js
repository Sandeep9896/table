let name=document.getElementById('name');
let number=document.getElementById('number');
let email=document.getElementById('email');
let btn=document.querySelector('#btn')
let table=document.querySelector('#mytable');
btn.addEventListener('click', function(){
    let row=document.createElement('tr');
    row.innerHTML="hello";
    table.appendChild(row)
})
