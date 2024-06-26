let eatMenu = document.getElementById('eat');
let drinkMenu = document.getElementById('drink');
let eatBtn = document.querySelector('.eatbtn');
let drinkBtn = document.querySelector('.drinkbtn');
function eat(){
   drinkMenu.classList.add('hided');
   eatMenu.classList.remove('hided');
eatBtn.style.backgroundColor= 'gray';
drinkBtn.style.backgroundColor= 'white';

};
function drink(){
   eatMenu.classList.add('hided');
   drinkMenu.classList.remove('hided');
   drinkBtn.style.backgroundColor= 'gray';
   eatBtn.style.backgroundColor= 'white';
};
eatBtn.addEventListener('click',eat);
drinkBtn.addEventListener('click',drink);
