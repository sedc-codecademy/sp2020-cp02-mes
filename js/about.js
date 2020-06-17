let structureAtags = document.querySelectorAll(".atag100");

for(let i = 0; i < structureAtags.length; i++) {
    structureAtags[i].addEventListener('click', function(event) {
        event.preventDefault();
    })
}

