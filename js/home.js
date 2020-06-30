//***LOADER***

document.addEventListener("load", function(){
    const load = document.querySelector(".loader");

    loader.className += " hidden";
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

//***LOGIN ***

const login = document.querySelector('.btn__desktop__login');
let loginWrapper = document.querySelector('.login_wrapper');
const loginClose = document.querySelector('.login__exit-button');

login.addEventListener('click', function(){
    loginWrapper.classList.add('login_wrapper-active');
})

loginClose.addEventListener('click', function(){
    loginWrapper.classList.remove('login_wrapper-active');
    loginWrapper.classList.add('login_wrapper-close');

    setTimeout(function(){
        loginWrapper.classList.remove('login_wrapper-close');
        loginWrapper.classList.add('login_wrapper');
    },1000)
   
})
//mobile
const loginMobile = document.querySelector('.btn__mobile__login');


loginMobile.addEventListener('click', function(){   
    loginWrapper.classList.add('login_wrapper-active');
})

//***REGISTER***

const register = document.querySelector('#registerOpen');
const registerWrapper = document.querySelector('.register_wrapper');
const registerClose = document.querySelector('.register__exit-button');

register.addEventListener('click', function(){
    loginWrapper.classList.remove('login_wrapper-active');
    loginWrapper.classList.add('login_wrapper-close');
    loginWrapper.classList.add('login_wrapper');
    
    setTimeout(function(){
        loginWrapper.classList.remove('login_wrapper-close');
        registerWrapper.classList.add('register_wrapper-active');
    },1000)
    
})

registerClose.addEventListener('click', function(){
    registerWrapper.classList.remove('register_wrapper-active');
    registerWrapper.classList.add('register_wrapper-close');

    setTimeout(function(){
        registerWrapper.classList.remove('register_wrapper-close');
        registerWrapper.classList.add('register_wrapper');
},1000)
     
})

//***Home slider***

//timer
setInterval(function(){

    const checkedElement = document.querySelector(".carousel > input:checked")
    const checkedElementId = checkedElement.getAttribute("id")
    const elementOrdinal = parseInt(checkedElementId[checkedElementId.length - 1]) % 5 //kolku slideri, tolku modul %
    document.getElementById("carousel-" + ((elementOrdinal + 1))).checked = true

}, 5000)

//SLIDER****

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

//RANDOMIZER img & h5 

var randomzieElement;

function randomize() {

    var images = []
    var titles = []
    var indexes = []
    var links = []
  
    const elementsImgs = randomzieElement.querySelectorAll("li img")
    const elementsTitles = randomzieElement.querySelectorAll("li h5")
    const elementLinks = randomzieElement.querySelectorAll("li a")
    var len = elementsImgs.length
  
  
    for(var i = 0; i < len; i++) {
      images.push(elementsImgs[i].getAttribute("src"))
      titles.push(elementsTitles[i].textContent)
      if(elementLinks.length > 0){
        links.push(elementLinks[i].getAttribute("href"))
      } 
      indexes.push(i)
    }
  
    indexes = shuffle(indexes)
  
    for(var i = 0; i < len; i++) {
      elementsImgs[i].setAttribute("src", images[indexes[i]])
      elementsTitles[i].textContent = titles[indexes[i]]
      if(elementLinks.length > 0){
        elementLinks[i].setAttribute("href", links[indexes[i]])
      } 
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

//SEARCH ***
let searchInputBar1 = document.querySelector('.search-form_desktop');
let searchInputBar = document.querySelector('.search-input_desktop');

document.addEventListener('click', function(e){   
    if (searchInputBar.contains(e.target)){
        searchInputBar1.style.width = '25%';
        searchInputBar.style.display = `flex`;
        // Clicked in box
    } else{
        searchInputBar1.style.width = '0%';
        searchInputBar.style.display = `none`;
      // Clicked outside the box
    } 
  });     //neshto ne radi ko sho treba poso mi se spie



//************************************************************//