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
    if (!$(this).hasClass("selectedGame")) {
        $("img.selectedGame").removeClass("selectedGame");
        $(this).addClass("selectedGame");

        let close = document.querySelector("#close");
        let modal = document.querySelector("#regulations__modal");

        let selectedGame = document.querySelector(".selectedGame + h5").textContent; 

        switch(selectedGame){
            case "Dota 2":
                openModal("./img/dota2Rules.png", "Dota 2 rulles and regulations");
                close.onclick = function() { 
                    modal.style.display = "none";
                }
            break;
            case "CS GO":
                openModal("./img/dota2Rules.png", "CS Go rules and regulations");
                close.onclick = function() { 
                    modal.style.display = "none";
                }
            break;
            case "PES":
                openModal("./img/dota2Rules.png", "Pes rules and regulations");
                close.onclick = function() { 
                    modal.style.display = "none";
                }
            break;
            case "GAME":
                openModal("./img/dota2Rules.png", "Game rules and regulations");
                close.onclick = function() { 
                    modal.style.display = "none";
                }
            break;
            case "GAME2":
                openModal("./img/dota2Rules.png", "Game 2 rules and regulations");
                close.onclick = function() { 
                    modal.style.display = "none";
                }
            break;
            case "GAME6":
                openModal("./img/dota2Rules.png", "Game 6 rules and regulations");
                close.onclick = function() { 
                    modal.style.display = "none";
                }
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



function openVideo(videos){
    $(document).ready(function () {
        $(videos).each(function () {
            var data = $(this).attr('data');
            $(this).append('<img src="http://img.youtube.com/vi/' + data + '/maxresdefault.jpg" />');
        });
    
        $(videos).click(function () {
            var data = $(this).attr('data');
            $('.videos-loader').append('<iframe src="https://www.youtube.com/embed/' + data + '" frameborder="0" allowfullscreen></iframe>');
            $('.videos-overlay').fadeIn(250);
        });
    
        $('.videos-close').click(function ($e) {
            $e.preventDefault();
            $('.videos-overlay').fadeOut(250, function () {
                $('.videos-loader').html('');
            });
        });
    });
}

function reload(videosId) {
    $(videosId).each(function () {
        var data = $(this).attr('data');
        $(this).append('<img src="http://img.youtube.com/vi/' + data + '/maxresdefault.jpg" />');
    });

    $(videosId).click(function () {
        var data = $(this).attr('data');
        $('.videos-loader').append('<iframe src="https://www.youtube.com/embed/' + data + '" frameborder="0" allowfullscreen></iframe>');
        $('.videos-overlay').fadeIn(250);
    });

    $('.videos-close').click(function () {
        $('.videos-overlay').fadeOut(250, function () {
            $('.videos-loader').html('');
        });
    });
};


// National competitions videos

openVideo('#nationalVideos a');
function nationalVideosByYear (){
    $(document).on("click", ".national_line_container li", function ($e) {
        $e.preventDefault();
        if (!$(this).hasClass("year_selected")) {
            $("li.year_selected").removeClass("year_selected");
            $(this).addClass("year_selected");
    
            let yearSelectedText = document.querySelector(".year_selected a").textContent;
            let videos = document.querySelector("#nationalVideos");
            switch (yearSelectedText) {
                case "2020":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="uT6YOI6JcRs"></a>';
                    videos.innerHTML += '<a data="ktAT6JCWCr0"></a>';
                    videos.innerHTML += '<a data="d0K436vUM4w"></a>';
                    videos.innerHTML += '<a data="PhbWIFDqQfk"></a>';  
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';  
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';  
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>'; 
                    reload('#nationalVideos a');
                    break;
                case "2019":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="uT6YOI6JcRs"></a>';
                    videos.innerHTML += '<a data="ktAT6JCWCr0"></a>';
                    videos.innerHTML += '<a data="d0K436vUM4w"></a>';
                    videos.innerHTML += '<a data="PhbWIFDqQfk"></a>';  
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';  
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';   
                    reload('#nationalVideos a');
                    break;
                case "2018":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="ZAfDoBQB8HU">';
                    reload('#nationalVideos a');
                    break;
                case "2017":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="uT6YOI6JcRs">';
                    reload('#nationalVideos a');
                    break;
                case "2016":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#nationalVideos a');
                    break;
                case "2015":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#nationalVideos a');
                    break;
                case "2014":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#nationalVideos a');
                    break;
                case "2013":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#nationalVideos a');
                    break;
                case "2012":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#nationalVideos a');
                    break;
                case "2011":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#nationalVideos a');
                    break;
                case "2010":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#nationalVideos a');
                    break;
                case "2009":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#nationalVideos a');
                    break;
                case "2008":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="YmWMi1kVCG8">';
                    reload('#nationalVideos a');
                    break;
                case "2007":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#nationalVideos a');
                    break;
                case "2006":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#nationalVideos a');
                    break;
            }
        }
    });
}
nationalVideosByYear();


//International competitions videos
openVideo('#internationalVideos a');

function internationalVideosByYear(){
    $(document).on("click", ".international_line_container li", function ($e) {
        $e.preventDefault();
        if (!$(this).hasClass("year_selected")) {
            $("li.year_selected").removeClass("year_selected");
            $(this).addClass("year_selected");
    
            let yearSelectedText = document.querySelector(".year_selected a").textContent;
            let videos = document.querySelector("#internationalVideos");
            switch (yearSelectedText) {
                case "2020":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="uT6YOI6JcRs"></a>';
                    videos.innerHTML += '<a data="ktAT6JCWCr0"></a>';
                    videos.innerHTML += '<a data="d0K436vUM4w"></a>';
                    videos.innerHTML += '<a data="PhbWIFDqQfk"></a>';  
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';  
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';  
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>'; 
                    reload('#internationalVideos a');
                    break;
                case "2019":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="uT6YOI6JcRs"></a>';
                    videos.innerHTML += '<a data="ktAT6JCWCr0"></a>';
                    videos.innerHTML += '<a data="d0K436vUM4w"></a>';
                    videos.innerHTML += '<a data="PhbWIFDqQfk"></a>';  
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';  
                    videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';   
                    reload('#internationalVideos a');
                    break;
                case "2018":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="ZAfDoBQB8HU">';
                    reload('#internationalVideos a');
                    break;
                case "2017":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="uT6YOI6JcRs">';
                    reload('#internationalVideos a');
                    break;
                case "2016":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#internationalVideos a');
                    break;
                case "2015":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#internationalVideos a');
                    break;
                case "2014":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#internationalVideos a');
                    break;
                case "2013":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#internationalVideos a');
                    break;
                case "2012":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#internationalVideos a');
                    break;
                case "2011":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#internationalVideos a');
                    break;
                case "2010":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#internationalVideos a');
                    break;
                case "2009":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#internationalVideos a');
                    break;
                case "2008":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="YmWMi1kVCG8">';
                    reload('#internationalVideos a');
                    break;
                case "2007":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#internationalVideos a');
                    break;
                case "2006":
                    videos.innerHTML = "";
                    videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                    reload('#internationalVideos a');
                    break;
            }
        }
    });
}

internationalVideosByYear();





