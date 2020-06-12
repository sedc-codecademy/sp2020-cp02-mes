// let popupDiv = document.querySelectorAll(".structure__popUp");
// let structureMembers = document.querySelectorAll(".li__divWrapper");
let structureAtags = document.querySelectorAll(".atag100");

for(let i = 0; i < structureAtags.length; i++) {
    structureAtags[i].addEventListener('click', function(event) {
        event.preventDefault();
    })
}

// $(popupDiv).hide();
// $(structureMembers).on("click", function(evt){
//     evt.preventDefault();
//     $(popupDiv).show();
// });
