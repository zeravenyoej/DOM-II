// Your code goes here
//1. click
const nav = document.querySelector('.nav-container');
nav.addEventListener('click', function(){
    this.style.backgroundColor='red';
});

//2. mouseover
const welcome=document.querySelector('.intro h2');
welcome.addEventListener('mouseover', function(){
    this.style.display='none';
})

//3.  mouseleave
const newLink = document.createElement('a');
newLink.textContent='Click Me';
const linkCont = document.querySelector('.nav');
linkCont.prepend(newLink);
newLink.classList.add('nav-link');
newLink.setAttribute('href', '#');
newLink.addEventListener('mouseleave', function(){
    this.style.border='3px dashed black';
});

//4. contextmenu (right click)
const textPar = document.querySelectorAll('.text-content p');
textPar.forEach(item => 
    item.addEventListener('contextmenu', function(){
        this.style.textDecoration='underline';
    }));

//5. keydown
const body = document.querySelector('body');
body.addEventListener('keydown', function(){
    this.style.backgroundColor='beige';
});

//6. dblclick
const img = document.querySelectorAll('img');
for (let i=0; i<img.length; i++){
    img[i].addEventListener('dblclick', function(){
        this.style.transform='rotate(90deg)';
    });
};

//7. copy
const footer = document.querySelector('.footer p');
footer.addEventListener('copy', function(){
    this.style.letterSpacing = "15px";
});

//8. mousemove
const parag = document.querySelectorAll('p');
for(let i = 0; i<parag.length; i++){
    parag[i].addEventListener('mousemove', function(){
        this.style.fontStyle = "italic";
    })
};

//9. mousedown
for(let i = 0; i<parag.length; i++){
    parag[i].addEventListener('mousedown', function(){
        this.style.fontStyle = "normal";
        this.stopPropagation();
    })
};

//10. mouseup 
const destination = document.querySelectorAll('.destination');
// for(let i =0; i<destination.length; i++){
//     destination[i].addEventListener('mouseup', function(event){
//         event.target.style.backgroundColor='yellow';
//         event.stopPropagation();
//     });
// };

destination.forEach(item=>
    item.addEventListener('mouseup', function(){
        this.style.backgroundColor='yellow';
        this.stopPropagation();
    }));

// Stop the navigation from items from refreshing the page by using `preventDefault()`
const navLinks = document.querySelectorAll('.nav-link');
for (let i=0;i<navLinks.length; i++){
    navLinks[i].addEventListener('click', function(event){
        event.preventDefault();
    });
};
