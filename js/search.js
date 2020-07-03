
//SEARCH ***
let searchInputBar1 = document.querySelector('.search-form_desktop');
let searchInputBar = document.querySelector('.search-input_desktop');

document.addEventListener('click', function(e){   
    if (searchInputBar.contains(e.target)){
        searchInputBar1.style.width = '25%';
        searchInputBar.style.display = `flex`;
        // Clicked in box
    }  
     else if(!searchInputBar.contains(e.target)){
        searchInputBar1.style.width = '0%';
        searchInputBar.style.display = `none`;
        // Clicked outside the box
    } 
  });    

  function onHover(){
    searchInputBar1.style.width = '25%';
    searchInputBar.style.display = `flex`;
  }
  function offHover(){
    searchInputBar1.style.width = '0%';
    searchInputBar.style.display = `none`;
  }

          //NOT GREAT, NOT TERRIBLE 
          //moze da se dosredi. se izgubi hover-ot