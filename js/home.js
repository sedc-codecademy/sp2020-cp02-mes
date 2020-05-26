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

// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');
// //Buttons
// const previousBtn = document.querySelector('#previousBtn');
// const nextBtn = document.querySelector('#nextBtn');
// //Counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;


// carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

// nextBtn.addEventListener('click',()=>{
//     if(counter >= carouselImages.length - 1) return;
//     carouselSlide.style.transition = 'transform 0.2s ease-in-out';
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
// });

// previousBtn.addEventListener('click',()=>{
//     if(counter <= 0) return;
//     carouselSlide.style.transition = 'transform 0.2s ease-in-out';
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
// });


// carouselSlide.addEventListener('transitionend',()=>{
//     if(carouselImages[counter].id === 'lastClone'){
//         carouselSlide.style.transition = 'none';
//         counter = carouselImages.length -2;
//         carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
//     }
//     if(carouselImages[counter].id === 'firstClone'){
//         carouselSlide.style.transition = 'none';
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

//     }
// });
//************************************************************//

$(".carousel").swipe({
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
    allowPageScroll: "vertical"
  });
  
  $(".carousel").swipe({
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
    allowPageScroll: "vertical"
  });