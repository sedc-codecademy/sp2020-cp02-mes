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



//************************************************************//

var latestNews = [
    "img/news1",
    'img/news2',
    'img/news3',
    'img/news4',
    'img/news5',
    'img/news6',
    'img/news7'
]

document.getElementById("news3").setAttribute("alt", latestNews[2])

var newArray = []

// function moveRight() {
//     const firstElement = latestNews.shift();

//     latestNews.push(firstElement)

//     document.getElementById("news3").setAttribute("alt", latestNews[2])

// }

function moveLeft() {

    const firstElement = latestNews.shift();
    latestNews.push(firstElement)

    document.getElementById("news3").setAttribute("alt", latestNews[2])

}