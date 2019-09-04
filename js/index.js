// Your code goes here
//1. mouseover
const logo = document.querySelector('.logo-heading');

const makeOr = function (event) {
    return event.target.style.color = "orange"
}
logo.addEventListener('mouseover', makeOr);


//2. mouseenter 

const headerPic = document.querySelector("header img");
const makeBig = function (event) {
    return event.target.style.transform = 'scale(1.1)';
};

headerPic.addEventListener('mouseenter', makeBig)

//3. mouseleave

const makeSmall= function (event) {
    return event.target.style.transform = 'scale(1)';
};
headerPic.addEventListener('mouseleave', makeSmall);


//4. load

window.addEventListener('load', event => {
    console.log('page is fully loaded');
});

//5. dblclick

const btn = document.querySelectorAll('.btn');
const makeBlack = function (event) {
    return event.target.style.color = 'black';
}

btn.forEach(item => {
    item.addEventListener('dblclick', makeBlack)
});

//6. click

const midPhotos = document.querySelectorAll('.content-section img');

const rotate = function (event) {
    return event.target.style.transform = 'rotate(90deg)';
}

midPhotos.forEach(photo => {
    photo.addEventListener('click', rotate);
});


//7.  contextmenu aka right click

const midText = document.querySelectorAll('.content-section p');

const preventDef = function(event) {
    return event.preventDefault();
}
midText.forEach(text => {
    text.addEventListener('contextmenu', preventDef);
})


//8. select aka highlight
const intro = document.querySelector('.intro');

const input = document.createElement('input');
input.type = 'text';
input.value = 'hello';

intro.append(input);


const insertText = function(event) {
    return input.value = 'hello from the fun bus';
};

input.addEventListener('select', insertText);


//9. mouseup. (unclear how this is different than 'click')

const pick = document.querySelector('.content-destination h2');
const makePink = function (event) {
    return event.target.style.backgroundColor = 'hotpink';
}

pick.addEventListener('mouseup', makePink);

//10. auxclick (unclear how this is different than 'click')

const footer = document.querySelector('footer p');
const goLeft = function (event) {
    return event.target.style.paddingRight = '500px';
}

footer.addEventListener('auxclick', goLeft);


//************************************************************ */
//[ ] Nest two similar events somewhere in the site and prevent the event propagation properly






//************************************************************ */
//[ ] Stop the navigation from items from refreshing the page by using `preventDefault()`

const links = document.querySelectorAll('nav a');
console.log(links);

links.addEventListener('click', preventDef);