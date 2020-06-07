let popupDiv = document.querySelectorAll(".structure__popUp");
let structureMembers = document.querySelectorAll(".li__divWrapper");

$(popupDiv).hide();
$(structureMembers).on("click", function(evt){
    evt.preventDefault();
    $(popupDiv).show();
});
