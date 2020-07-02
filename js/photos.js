
$(document).on("click", ".photos_line_container li", function () {
    if (!$(this).hasClass("year_selected")) 
    {
        $("li.year_selected").removeClass("year_selected");
        $(this).addClass("year_selected");

        let yearSelectedText = document.querySelector(".year_selected a").textContent;
        switch (yearSelectedText) {
            case "2020":
                showImages(".photos2020");
                hideImages();
            break;
            case "2019":
                showImages(".photos2019");
                hideImages();
            case "2018":
                showImages(".photos2018");
                hideImages();
            break;
            case "2017":
                showImages(".photos2017")
                hideImages();
            break;
            case "2016":
                showImages(".photos2016")
                hideImages();
            break;
            case "2015":
                showImages(".photos2015")
                hideImages();
            break;
            case "2014":
                showImages(".photos2014")
                hideImages();
            break;
            case "2013":
                showImages(".photos2013")
                hideImages();
            break;
            case "2012":
                showImages(".photos2012")
                hideImages();
            break;
            case "2011":
                showImages(".photos2011")
                hideImages();
            break;
            case "2010":
                showImages(".photos2010")
                hideImages();
            break;
            case "2009":
                showImages(".photos2009")
                hideImages();
            break;
            case "2008":
                showImages(".photos2008")
                hideImages();
             break;
            case "2007":
                showImages(".photos2007");
                hideImages();
            break;
            case "2006":
               showImages(".photos2006");
               hideImages();
            break;
            case "2005":
                showImages(".photos2005");
                hideImages();
            break;
        }
    }
});


function showImages(className){
    let images = document.querySelector(className);
    let allYears = document.querySelectorAll('.allYears');
    let li = document.querySelectorAll('.photos_timeline_list li');
    
    for(let i = 0; i < li.length; i++){
        if(li[i].classList.contains("year_selected")){
            images.classList.remove("visibility");
        }
    }
};

function hideImages(){
    let allYears = document.querySelectorAll('.allYears');
    let li = document.querySelectorAll('.photos_timeline_list li');

    for(let j = 0; j < li.length; j++){
        allYears.forEach(element =>{
            if(!element.classList.contains("visibility") && !li[j].classList.contains("year_selected")){
                element.classList.add("visibility");
            }
            j++
        })
    }
}