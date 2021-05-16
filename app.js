


const signInBtn = document.querySelector("#in");
const signUpBtn = document.querySelector("#up");
const sectionIn = document.querySelector(".login");
const sectionUp = document.querySelector(".signup");

signUpBtn.addEventListener('click', function(){
    sectionIn.style.display = "none";
    sectionUp.style.display = "inline";
});

signInBtn.addEventListener('click', function(){
    sectionIn.style.display = "inline";
    sectionUp.style.display = "none";
});