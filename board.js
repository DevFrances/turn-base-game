// class Board(){
//   constructor(){

  // }


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

 }

function getRandomNumber(length){
  return Math.floor(Math.random()* length)
};
start()

// Place Random Object on the Gameboard
const obstacle = 'images/brick.jpeg';
const weapons = ['images/dynamite.jpeg', 'images/gun.jpeg', 'images/bomb.png', 'images/knife.jpeg',]
const players = ['images/player1.jpeg', 'images/player2.jpeg']

function placeItem(item) {
  let randomNumber = getRandomNumber($('.box').length);
  let box = $('.box')[randomNumber]
  let isOccupied = $('box').hasClass('occupied');
  if (isOccupied) {
    console.log(isOccupied)
    return placeItem(item)
  } else {
    box.innerHTML += `<img src=${item} class="occupied"/>`
  }

}
function getRandomNumber(length) {
  return Math.floor(Math.random() * length)
};

function renderWeapons() {
  for (let i = 0; i < weapons.length; i++)
    placeItem(weapons[i])
}
function renderPlayers() {
  for (let i = 0; i < players.length; i++)
    placeItem(players[i])
}
function renderObstacles() {
  for (let i = 0; i < 12; i++) {
    placeItem(obstacle)
  }
}
renderWeapons();
renderPlayers();
renderObstacles()

