// Your code goes here
//1. mouseover
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', event => {
    event.target.style.color = "orange"
});

//2. mouseenter 
const headerPic = document.querySelector("header img");
headerPic.addEventListener('mouseenter', event => {
    event.target.style.transform = 'scale(1.1)';
})

//3. mouseleave
headerPic.addEventListener('mouseleave', event =>{
    event.target.style.transform = 'scale(1)';
})


//4. load
window.addEventListener('load', event => {
    console.log('page is fully loaded');
});

//5. dblclick
const btn = document.querySelectorAll('.btn');
btn.forEach(item => {
    item.addEventListener('dblclick', event => {
        event.target.style.color = 'black';
    })
});

//6. click
const midPhotos = document.querySelectorAll('.content-section img');
midPhotos.forEach(photo => {
    photo.addEventListener('click', event => {
        event.target.style.transform = 'rotate(90deg)'
    });
});


//7. contextmenu
midPhotos.forEach(photo => {
    photo.addEventListener('auxclick', event => {
        event.target.style.transform = none;
    });
});


//8.  contextmenu aka right click
// const midText = document.querySelectorAll('.content-section p');
// midText.forEach(text => {
//     text.addEventListener('contextmenu', event => {
//         event.target.style.
//     })
// })









