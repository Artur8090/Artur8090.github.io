const projectItems = document.querySelectorAll('.project-item');

function setOpacity(items, opacityValue) {
        items.forEach(item => {
            item.style.opacity = opacityValue;
        });
    }


for(let i = 0; i< projectItems.length; i++){
    if(i == 0 || i == 2){
        setOpacity(projectItems, 0.9)
    }
}
