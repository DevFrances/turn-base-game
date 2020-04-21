// class Board(){
//   constructor(){

  // }


function start() {
  for (let rows = 0; rows < 9; rows++) {
    let row = document.createElement('div');
    row.className = "row";
    for (let cols = 0; cols < 9; cols++) {
        let box = document.createElement('div');
        $(box).attr('id', `${rows}-${cols}`);
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
  let isOccupied = $(box).hasClass('occupied');
  if (isOccupied) {
    console.log(isOccupied)
    return placeItem(item)
  } else {
    $(box).addClass('occupied');
    box.innerHTML += `<img src='${item}'/>`
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

