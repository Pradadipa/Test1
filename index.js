//Event Listener
// const button = document.getElementById("myButton");

// const myFunction = () => {
//     alert('Button Clicked!');
// }

// button.addEventListener('click',myFunction);
// //End


// // Mouse Click
// const button = document.getElementById("myButton");

// button.addEventListener('mousedown',() => {
//     console.log('mouse button down on the button.');
// });

// button.addEventListener('mouseup',() => {
//     console.log('mouse button released on the button.');
// });

// button.addEventListener('click',() => {
//     console.log('button clicked.');
// });

// button.addEventListener('dblclick',() => {
//     console.log('button double-clicked.');
// });
// END

// MOUSE MOVE
// let track = document.getElementById("track");
// track.addEventListener('mousemove', (event)=>{
//   let log = document.getElementById("log");
//   log.innerText = " Screen X/Y: (" + event.screenX + ',' + event.screenY +") \n Client X/Y: (" + event.clientX + "," + event.clientY + ")"
// });
// });


// const button = document.getElementById("myButton");
// const output = document.getElementById("output");

// button.addEventListener("mousedown",() => {
//     output.textContent += " MouseDown";
// });

// button.addEventListener("mouseup",() => {
//     output.textContent += " MouseUp";
// });


// button.addEventListener("click",() => {
//     output.textContent += " Click";
// });

// const ButtonReset =
// document.getElementById("buttonReset");
// ButtonReset.addEventListener('click',()=>{
//     output.textContent = "Mouse Events: ";
// });

// let button = document.getElementById("myButton");

// function clickbutton(){
//     alert("Tombol Telah di klik");
// }

// button.addEventListener("click",clickbutton);


// let textBox = document.getElementById('massage');
// textBox.addEventListener('keydown',(event)=>{
//     console.log(`key=${event.key},code=${event.code}`);
// });

// let textBox = document.getElementById("message");
  
// let output = document.getElementById("output");
  
// textBox.addEventListener('keydown', (event)=>{
//     output.textContent += "key = " + event.key + ", code = " + event.code + ", ";
//   })

const myAnchor = document.getElementById("myAnchor"); 
const output = document.getElementById("output");
myAnchor.addEventListener("click", (event)=>{
  event.preventDefault();
  output.textContent += "a href diklik.";
});
