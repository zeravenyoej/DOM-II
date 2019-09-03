// Your code goes here
//1. mouseover
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (event) => {event.target.style.color = "orange"});

//2. mouseenter 
const headerPic = document.querySelector("header img");
headerPic.addEventListener('mouseenter', item => {
    headerPic.style.transform = 'scale(2)';
})

//3. mouseleave
const headerPicDown = document.querySelector('header img');
headerPicDown.addEventListener('mouseleave', item =>{
    headerPicDown.style.transform = 'scale(1)';
})


//4. load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

//5. dblclick
const btn = document.querySelectorAll('.btn');
btn.forEach(item => {
    item.addEventListener('dblclick', event => {
        event.target.style.color = 'black';
    })
})










