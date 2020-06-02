let csGo = document.querySelector("#cs-go");
let pes = document.querySelector("#pes");
let lol = document.querySelector("#lol");
let dota = document.querySelector("#dota");

let csGoContainer = document.querySelector(".csgo-table");
let pesContainer = document.querySelector(".pes-table");
let lolContainer = document.querySelector(".lol-table");
let dotaContainer = document.querySelector(".dota2-table");



csGo.addEventListener("click", function(){
    if(csGoContainer.classList.contains('tableIsInactive')){
        csGoContainer.classList.remove('tableIsInactive');
    }
    pesContainer.classList.add('tableIsInactive');
    lolContainer.classList.add('tableIsInactive');
    dotaContainer.classList.add('tableIsInactive');
});
pes.addEventListener("click", function(){
    if(pesContainer.classList.contains('tableIsInactive')){
        pesContainer.classList.remove('tableIsInactive');
    }
    csGoContainer.classList.add('tableIsInactive');
    lolContainer.classList.add('tableIsInactive');
    dotaContainer.classList.add('tableIsInactive');
});
lol.addEventListener("click", function(){
    if(lolContainer.classList.contains('tableIsInactive')){
        lolContainer.classList.remove('tableIsInactive');
    }
    csGoContainer.classList.add('tableIsInactive');
    pesContainer.classList.add('tableIsInactive');
    dotaContainer.classList.add('tableIsInactive');
});
dota.addEventListener("click", function(){
    if(dotaContainer.classList.contains('tableIsInactive')){
        dotaContainer.classList.remove('tableIsInactive');
    }
    csGoContainer.classList.add('tableIsInactive');
    pesContainer.classList.add('tableIsInactive');
    lolContainer.classList.add('tableIsInactive');
});