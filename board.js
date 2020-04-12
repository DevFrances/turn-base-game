// class Board(){
//   constructor(){

  // }

let images = [
  'images/dynamite.jpeg',
  'images/gun.jpeg',
  'images/bomb.png',
  'images/knife.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/brick.jpeg',
  'images/player1.jpeg',
  'images/player2.jpeg'
]

function start() {
  for (let i = 0; i < 9; i++) {
    let row = document.createElement('div');
    row.className = "row";
    for (let j = 0; j < 9; j++) {
        let box = document.createElement('div');
        box.className = "box";
        row.appendChild(box);
    }                
    document.getElementById('boxParent').appendChild(row);
 }
 let elements = document.getElementsByClassName('box')

 for (let i = 0; i <= 17; i++) {
   let randomNumber = getRandomNumber(elements.length)
  // let randomNumber = Math.floor((Math.random() * 17) + 1);
   let box = elements[randomNumber]
   let image = images[i]
   box.innerHTML = `<img src=${image} alt="Image"/>`
 }
}



function getRandomNumber(length){
  return Math.floor(Math.random()* length)
};
start()




  // let container = document.querySelector('.container');
  // let list = [];
  // let newlist = [];
  
  // for (let i = 0; i < container.children.length; i++) {
  //   list.push(container.children[i]);
  // }
  
  // list.sort(function(a, b) {
  //   return -1 + Math.random() * 3; // -1, 0, or 1
  // });
  
  // while (container.children.length > 0) {
  //   container.removeChild(container.children[0]);
  // }
  // list.forEach(function(el) {
  //   container.appendChild(el);
  // });
// }

// // create two dimensional array
// array =
// [
//   [   ],
//   [   ]
// ];