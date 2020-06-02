let news = document.querySelector("#news1");
let calendar = document.querySelector('#calendar1');
let pressKit = document.querySelector('#pressKit1');
let openNews = document.querySelector('#btn-readMore');
let titleOpenNews = document.querySelector('#title-openNews');

let newsContainer = document.querySelector(".articles-news");
let calendarContainer = document.querySelector(".container-calendar");
let pressKitContainer = document.querySelector(".container-pressKit");
let openNewsContainer = document.querySelector(".container-openNews");

openNews.addEventListener("click", function(){
    if(openNewsContainer.classList.contains('isInactive')){
        openNewsContainer.classList.remove('isInactive')
    }
    calendarContainer.classList.add('isInactive');
    pressKitContainer.classList.add('isInactive');
    newsContainer.classList.add('isInactive');
}) 
titleOpenNews.addEventListener("click", function(){
    if(openNewsContainer.classList.contains('isInactive')){
        openNewsContainer.classList.remove('isInactive')
    }
    calendarContainer.classList.add('isInactive');
    pressKitContainer.classList.add('isInactive');
    newsContainer.classList.add('isInactive');
})
news.addEventListener("click", function(){
    if(newsContainer.classList.contains('isInactive')){
        newsContainer.classList.remove('isInactive')
    }
    calendarContainer.classList.add('isInactive');
    pressKitContainer.classList.add('isInactive');
    openNewsContainer.classList.add('isInactive');
    
});
calendar.addEventListener("click", function(){
    if(calendarContainer.classList.contains('isInactive')){
        calendarContainer.classList.remove('isInactive')
    }
    newsContainer.classList.add('isInactive');
    pressKitContainer.classList.add('isInactive');
    openNewsContainer.classList.add('isInactive');
   
});
pressKit.addEventListener("click", function(){
    if(pressKitContainer.classList.contains('isInactive')){
        pressKitContainer.classList.remove('isInactive')
    }
    newsContainer.classList.add('isInactive');
    calendarContainer.classList.add('isInactive');
    openNewsContainer.classList.add('isInactive');
   
});

/*
function goBack() {
    history.go(-1);
}
*/



