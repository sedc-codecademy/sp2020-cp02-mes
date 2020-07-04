let structureAtags = document.querySelectorAll(".atag100");

for(let i = 0; i < structureAtags.length; i++) {
    structureAtags[i].addEventListener('click', function(event) {
        event.preventDefault();
    })
}

// let structurePopup = document.querySelectorAll(".clickToShowInfo");
// let infoPopup = document.querySelectorAll(".info");
// let structureSection = document.querySelector(".strucure__section");
// for (let i = 0; i < structurePopup.length; i++) {
//     structurePopup[i].addEventListener('click', function(event) {
//         event.preventDefault();
//         for (let i = 0; i < infoPopup.length; i++) {
//             infoPopup[i].style.visibility = "visible" ;
//             structureSection.addEventListener('click', function(event) {
//                if(infoPopup[i].style.visibility = "visible"){
//                 infoPopup[i].style.visibility = "hidden"; 
//                }
//             })
//         }
    
//     })

// }


