const NoWidth=50;
const NoHeight=150;

const maxWidth=window.innerWidth-NoWidth;
const maxheigth=window.innerHeight-NoHeight;

window.addEventListener('DOMContentLoaded', () =>{
const No =document.getElementById('No');

No.addEventListener('click',() => alert('you clicked me!'));

No.addEventListener('mouseover', () => {
No.style.left=Math.floor(Math.random()*(maxWidth + 1)) +'px';
No.style.top=Math.floor(Math.random()*(maxheigth + 1)) +'px';})
});
window.addEventListener('DOMContentLoaded',() =>{
const yes=document.getElementById('yes');
yes.addEventListener('click',()=> alert('I Love you too xoxoxo!'));})