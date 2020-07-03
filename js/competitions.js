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


$(document).on("click", ".game img", function () {
    if (!$(this).hasClass("selectedGame") || $(this).hasClass("selectedGame")) {
        $("img.selectedGame").removeClass("selectedGame");
        $(this).addClass("selectedGame");

        let selectedGame = document.querySelector(".selectedGame + h5").textContent; 

        switch(selectedGame){
            case "Dota 2":
                openModal("./img/dota2Rules.png", "Dota 2 rulles and regulations");
                closeModal();
            break;
            case "CS GO":
                openModal("./img/dota2Rules.png", "CS Go rules and regulations");
                closeModal();
            break;
            case "PES":
                openModal("./img/dota2Rules.png", "Pes rules and regulations");
                closeModal();
            break;
            case "GAME":
                openModal("./img/dota2Rules.png", "Game rules and regulations");
                closeModal();
            break;
            case "GAME2":
                openModal("./img/dota2Rules.png", "Game 2 rules and regulations");
                closeModal();
            break;
            case "GAME6":
                openModal("./img/dota2Rules.png", "Game 6 rules and regulations");
                closeModal();
            break;
        }
    }
});       



function openModal(imgSrc, imgTitle){
    let modal = document.querySelector("#regulations__modal");
    let rulesImg = document.querySelector("#regulations__modal > img");
    let title = document.querySelector("#title");

    modal.style.display = "block";
    rulesImg.src = imgSrc;
    title.innerHTML = imgTitle;
}

function closeModal(){
    let close = document.querySelector("#close");
    let modal = document.querySelector("#regulations__modal");

    close.onclick = function() { 
        modal.style.display = "none";
    }

    modal.onclick = function() { 
        modal.style.display = "none";
    }
}

















