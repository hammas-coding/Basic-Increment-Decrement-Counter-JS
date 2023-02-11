let subtract = document.getElementById('minus');
let add = document.getElementById('plus');
let number = document.getElementById('number');
let num=1;
subtract.addEventListener('click', () => {
    num--;
    number.innerHTML = num;
});
add.addEventListener('click', () => {
    num++;
    number.innerHTML = num;
});