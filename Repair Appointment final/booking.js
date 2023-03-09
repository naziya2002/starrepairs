// function random(){

// document.getElementById("number").innerHtml=Math.floor(Math.random()*100)

// }


const number=document.getElementById('number')
const button=document.getElementById('button')

const randomNumbergen=()=>{
    const randomNumber=Math.floor(Math.random()*100);
    number.textContent=randomNumber;
}
randomNumbergen()

let popup=document.getElementById("popup");
function openpopup(){
    popup.classList.add("open-popup")
}
function closepopup(){
    popup.classList.remove("open-popup")
}





let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
