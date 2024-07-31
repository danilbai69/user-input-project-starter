let Maintitle = document.getElementById("main_title")
let titleInput = document.getElementById("title_input")
let NounInput = document.getElementById("noun")
let adjectiveInput = document.getElementById("adjective")
let submitBtn = document.getElementById("submit_button")

function GetTitles(event){
    event.preventDeafult();
    let TitleValue = titleInput.ariaValueMax;
    Maintitle.innerHTML = 
}

titleInput.addEventListener("change", GetTitles)