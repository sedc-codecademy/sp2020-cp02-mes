$(document).ready(function () {
    $('#videos a').each(function () {
        var data = $(this).attr('data');
        $(this).append('<img src="http://img.youtube.com/vi/' + data + '/maxresdefault.jpg" />');
    });

    $('#videos a').click(function () {
        var data = $(this).attr('data');
        $('#loader').append('<iframe src="https://www.youtube.com/embed/' + data + '" frameborder="0" allowfullscreen></iframe>');
        $('#overlay').fadeIn(250);
    });

    $('#close').click(function () {
        $('#overlay').fadeOut(250, function () {
            $('#loader').html('');
        });
    });
});




$(document).on("click", ".videos_line_container li", function () {
    if (!$(this).hasClass("year_selected")) {
        $("li.year_selected").removeClass("year_selected");
        $(this).addClass("year_selected");

        let yearSelectedText = document.querySelector(".year_selected a").textContent;
        let videos = document.querySelector("#videos");
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
                reload();
                break;
            case "2019":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="uT6YOI6JcRs"></a>';
                videos.innerHTML += '<a data="ktAT6JCWCr0"></a>';
                videos.innerHTML += '<a data="d0K436vUM4w"></a>';
                videos.innerHTML += '<a data="PhbWIFDqQfk"></a>';  
                videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';  
                videos.innerHTML += '<a data="rR4n-0KYeKQ"></a>';   
                reload();
                break;
            case "2018":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="ZAfDoBQB8HU">';
                reload();
                break;
            case "2017":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="uT6YOI6JcRs">';
                reload();
                break;
            case "2016":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                reload();
                break;
            case "2015":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                reload();
                break;
            case "2014":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                reload();
                break;
            case "2013":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                reload();
                break;
            case "2012":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                reload();
                break;
            case "2011":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                reload();
                break;
            case "2010":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                reload();
                break;
            case "2009":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                reload();
                break;
            case "2008":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="YmWMi1kVCG8">';
                reload();
                break;
            case "2007":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                reload();
                break;
            case "2006":
                videos.innerHTML = "";
                videos.innerHTML = '<a data="rR4n-0KYeKQ">';
                reload();
                break;
        }
    }
});


let reload = function () {
    $('#videos a').each(function () {
        var data = $(this).attr('data');
        $(this).append('<img src="http://img.youtube.com/vi/' + data + '/maxresdefault.jpg" />');
    });

    $('#videos a').click(function () {
        var data = $(this).attr('data');
        $('#loader').append('<iframe src="https://www.youtube.com/embed/' + data + '" frameborder="0" allowfullscreen></iframe>');
        $('#overlay').fadeIn(250);
    });

    $('#close').click(function () {
        $('#overlay').fadeOut(250, function () {
            $('#loader').html('');
        });
    });
};









