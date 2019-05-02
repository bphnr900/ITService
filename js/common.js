
const itemClassName = "filter__item";
const itemSeletedClassName = "filter__item-selected";

window.onload = function() {
    var items = document.getElementsByClassName(itemClassName);
    for (i = 0; i < items.length; i++) {
        items[i].addEventListener("click",listSelectedEvent,false);
    }
}

function listSelectedEvent() {
    let classes = this.classList;
    if(isContainClassName(classes)){
        classes.remove(itemSeletedClassName);
    }
    else{
        classes.add(itemSeletedClassName);
    }
}

function isContainClassName(classes){
    for(i = 0; i < classes.length; i++){
        let regexp = new RegExp(itemSeletedClassName);
        let target = classes[i];
        if(regexp.test(target)) return true;
    }
    return false;
}