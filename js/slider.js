//LATEST NEWS SLIDER***

var element;

const $ = selector => {
    return element.querySelector(selector);
};
  

const $$ = selector => {
   return element.querySelectorAll(selector)
}


function slideRight(hiddenItems) {

    const beginNewEl = hiddenItems.shift()
 
   if(beginNewEl) {
     beginNewEl.classList.remove("begin-anew")
     beginNewEl.classList.remove("before-hide")
     beginNewEl.classList.add("begin-anew-fast")
     beginNewEl.offsetHeight
     beginNewEl.classList.add("begin-anew")
     beginNewEl.classList.remove("begin-anew-fast")
   }
   
   const hideEl = $(".hide")
   if (hideEl) {
     hideEl.classList.add("before-hide")
     hideEl.classList.remove("hide")
     hiddenItems.push(hideEl)
   }
 
   if ($(".prev")) {
     $(".prev").classList.add("hide");
     $(".prev").classList.remove("prev");
   }
   
   $(".act").classList.add("prev");
   $(".act").classList.remove("act");
 
   $(".next").classList.add("act");
   $(".next").classList.remove("next");
   
   $(".new-next").classList.add("next");
   $(".new-next").classList.remove("new-next");
 
   
   if(beginNewEl){
     beginNewEl.classList.add("new-next")
     beginNewEl.classList.remove("begin-anew")
     beginNewEl.classList.remove("before-hide")
   }
 }
 
 function slideLeft(hiddenItems) {
 
   const restoreElement = hiddenItems.pop()
   if(restoreElement) {
     restoreElement.classList.remove("begin-anew")
     restoreElement.classList.remove("before-hide")
     restoreElement.classList.add("before-hide-fast")
     restoreElement.offsetHeight
     restoreElement.classList.add("before-hide")
     restoreElement.classList.remove("before-hide-fast")
   }
 
   const newElement = $(".new-next")
   newElement.classList.add("begin-anew") 
   newElement.classList.remove("new-next")
   hiddenItems.unshift(newElement)
   
   $(".next").classList.add("new-next");
   $(".next").classList.remove("next");
   
   $(".act").classList.add("next");
   $(".act").classList.remove("act");
   
   $(".prev").classList.add("act");
   $(".prev").classList.remove("prev");
   
   $(".hide").classList.add("prev");
   $(".hide").classList.remove("hide");
 
   if(restoreElement) {
     restoreElement.classList.add("hide")
     restoreElement.classList.remove("before-hide")
     restoreElement.classList.remove("begin-anew")
   }
 }

