//***LOADER***

window.addEventListener("load", function(){
    const load = document.querySelector(".loader");

    loader.className += " hidden";
})

//***LOGIN ***

const login = document.querySelector('.btn__desktop__login');
let loginWrapper = document.querySelector('.login_wrapper');
const loginClose = document.querySelector('.login__exit-button');

login.addEventListener('click', function(){
    loginWrapper.classList.remove('login_wrapper');
    loginWrapper.classList.add('login_wrapper-active');
})

loginClose.addEventListener('click', function(){
    loginWrapper.classList.remove('login_wrapper-active');
    loginWrapper.classList.add('login_wrapper');
})
//mobile
const loginMobile = document.querySelector('.btn__mobile__login');


loginMobile.addEventListener('click', function(){
    loginWrapper.classList.remove('login_wrapper');
    loginWrapper.classList.add('login_wrapper-active');
})


//***REGISTER***

const register = document.querySelector('#registerOpen');
const registerWrapper = document.querySelector('.register_wrapper');
const registerClose = document.querySelector('.register__exit-button');

register.addEventListener('click', function(){
    loginWrapper.classList.remove('login_wrapper-active');
    loginWrapper.classList.add('login_wrapper-close');
    // loginWrapper.animate([
    //     // keyframes
    //     { transform: 'translateY(0px)' }, 
    //     { transform: 'translateY(-150px)' }
    //   ], { 
    //     // timing options
    //     duration: 1000,
    //     // iterations: Infinity
    //   });
    setTimeout(function(){
        registerWrapper.classList.remove('register_wrapper');
        loginWrapper.classList.remove('login_wrapper-close');
        registerWrapper.classList.add('register_wrapper-active');
    },1000)
    // loginWrapper.classList.add('login_wrapper');
    
})

registerClose.addEventListener('click', function(){
    registerWrapper.classList.remove('register_wrapper-active');
    registerWrapper.classList.add('register_wrapper');
})


//***HEADER***

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  

    burger.addEventListener('click',()=>{
          //toggle nav
        nav.classList.toggle('nav-active');
    
    //animate links
    navLinks.forEach((link, index)=>{
        if(link.style.animation) {
            link.style.animation = '';
        }   else {
            link.style.animation = `navLinkFade 0.8s ease forwards ${index/ 7 + 0.5}s`;
        }

        });
        //burger animation

        burger.classList.toggle('toggle');
    
    });
}

navSlide();

//***Home slider***

setInterval(function(){

    const checkedElement = document.querySelector(".carousel > input:checked")
    const checkedElementId = checkedElement.getAttribute("id")
    const elementOrdinal = parseInt(checkedElementId[checkedElementId.length - 1]) % 5 //kolku slideri, tolku modul %
    document.getElementById("carousel-" + ((elementOrdinal + 1))).checked = true

}, 5000)

//***Slider-Members***

// var news = []

// function setSrc() {
//   var i = 0;
//   const elements = document.querySelectorAll("#news-slider li img")

//   elements.forEach(el=> {
//     news.push(el.getAttribute("src"))
//   })

//   news = shuffle(news)

//   elements.forEach(el=> {
//     el.setAttribute("src", news[i]);
//     i = i + 1
//   })
// }

// function shuffle(array) {
//   return array.sort(() => Math.random() - 0.5);
// }

// setSrc()

var newsSliderItems = []
var membersSliderItems = []

function prefil(){
  document.querySelectorAll("#news-slider .begin-anew").forEach(el => newsSliderItems.push(el))
  document.querySelectorAll("#members-slider .begin-anew").forEach(el => membersSliderItems.push(el))
}

prefil()

function slideLeftNews(){ 
    element = document.querySelector("#news-slider")
    slideLeft(newsSliderItems)
}

function slideRightNews(){
    element = document.querySelector("#news-slider")
    slideRight(newsSliderItems)
}

function slideLeftMembers(){ 
  element = document.querySelector("#members-slider")
  slideLeft(membersSliderItems)
}

function slideRightMembers(){
  element = document.querySelector("#members-slider")
  slideRight(membersSliderItems)
}

//*** RANDOMIZER img & h5 

var randomzieElement;

function randomize() {

  var images = []
  var titles = []
  var indexes = []

  const elementsImgs = randomzieElement.querySelectorAll("li img")
  const elementsTitles = randomzieElement.querySelectorAll("li h5")
  var len = elementsImgs.length

  for(var i = 0; i < len; i++) {
    images.push(elementsImgs[i].getAttribute("src"))
    titles.push(elementsTitles[i].textContent)
    indexes.push(i)
  }

  indexes = shuffle(indexes)

  for(var i = 0; i < len; i++) {
    elementsImgs[i].setAttribute("src", images[indexes[i]])
    elementsTitles[i].textContent = titles[indexes[i]]
  }

}

function randomizeAll(){
  randomzieElement = document.querySelector("#news-slider");
  randomize();
  randomzieElement = document.querySelector("#members-slider")
  randomize()
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

randomizeAll()


//************************************************************//

var latestNews = [
    './img/74381.JPG',
    './img/587508.png',
    './img/606641.jpg',
    './img/74381.JPG',
    './img/74381.JPG',
    './img/74381.JPG',
    './img/74381.JPG',
    './img/74381.JPG',
      
]

function initializeNewsSlider() {
    const newsBoxes = document.querySelectorAll(".news-slider > img ")
    var i;
    for(i = 0; i < newsBoxes.length; i ++) {
        newsBoxes[i].setAttribute("src", latestNews[i])
    }

}
initializeNewsSlider();

var newArray = []

function moveLeft() {

    const leftButton = document.getElementById("moveLeftBtn")
    const rightButton = document.getElementById("moveRightBtn")
    leftButton.classList.add("disable-events")
    rightButton.classList.add("disable-events")

    triggerAnimationLeft()
    const firstElement = latestNews.shift();
    latestNews.push(firstElement)

    setTimeout(function(){
        initializeNewsSlider();
        leftButton.classList.remove("disable-events")
        rightButton.classList.remove("disable-events")
    }, 1000)

}

function moveLeftTwice(){
    moveLeft()
    setTimeout(moveLeft, 1000)
}

function moveRightTwice(){
    moveRight()
    setTimeout(moveRight, 1000)
}
function moveRight() {

    const leftButton = document.getElementById("moveLeftBtn")
    const rightButton = document.getElementById("moveRightBtn")
    leftButton.classList.add("disable-events")
    rightButton.classList.add("disable-events")

    triggerAnimationRight()
    const lastElement = latestNews[latestNews.length-1];
    latestNews = [lastElement].concat(latestNews.slice(0, latestNews.length-1))

    setTimeout(function(){
        initializeNewsSlider();
        leftButton.classList.remove("disable-events")
        rightButton.classList.remove("disable-events")
    }, 1000)
}

function triggerAnimationLeft() {

    const newsBoxes = document.querySelectorAll(".news-slider > img")

    var i;
    for(i = 0; i < newsBoxes.length; i ++) {
        newsBoxes[i].classList.remove('slider' + (i + 1) + '-animate-right'); // reset animation
        newsBoxes[i].classList.remove('slider' + (i + 1) + '-animate-left'); // reset animation
        void newsBoxes[i].offsetWidth; // trigger reflow
        newsBoxes[i].classList.add('slider' + (i + 1) + '-animate-left'); // start animation
    }

}

function triggerAnimationRight() {
    const newsBoxes = document.querySelectorAll(".news-slider > img")

    var i;
    for(i = 0; i < newsBoxes.length; i ++) {
        newsBoxes[i].classList.remove('slider' + (i + 1) + '-animate-right'); // reset animation
        newsBoxes[i].classList.remove('slider' + (i + 1) + '-animate-left'); // reset animation
        void newsBoxes[i].offsetWidth; // trigger reflow
        newsBoxes[i].classList.add('slider' + (i + 1) + '-animate-right'); // start animation
    }

}
