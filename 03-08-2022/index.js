// const swap = (a, b) => {
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     console.log(a, b);
// };

// const a = 6;
// const b = 2;
// swap(a, b);

// const elem = document.querySelector('ul');
// console.log(elem);

// const elements = document.querySelectorAll('ul > li');
// console.log(elements);
// const btn_clicker = () => {
//     console.log('btn is clicked');
// };

// const img_clicker = () => {
//     console.log('img is clicked');
// };

// const inp_changer = () => {
//     console.log('Input changed');
// };

// const realtime_changer = () => {
//     console.log('realtime suggestion');
// };

// const submit_clicked = () => {
//     console.log('submited');
// };

// const ip1 = document.getElementById('ip1');

// const ip2 = document.getElementById('ip2');
// ip1.addEventListener('change', inp_changer);
// ip2.addEventListener('keyUp', realtime_changer);

// const btn = document.getElementsByClassName('btn')[0];
// btn.addEventListener('click', btn_clicker);

// first add and b and than multiply it with c.
const sum = (a, b) => a + b;
const multiply = (sum, c) => sum * c;

const a = 25,
    b = 72,
    c = 83;

const result = multiply(sum(a, b), c);
console.log(result);

// document.onload is fired before window.onload to load the external contents like images,text whereas window.onload is fired when document.onload is fully loaded the content to the webpage like script, css etc.

// document.getElementById();
