
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

// Place Random weapon on the Gameboard
class weapon {
  constructor(name, damage, image){
      this._name = name;
      this._damage = damage;
      this._image = image
  }
  get damage(){
    return damage
  }
}

let weapon1 = new weapon(
  "bomb", "30", "images/bomb.png"
)
let weapon2 = new weapon(
  "dynamite", "20", "images/dynamite.jpeg"
)
let weapon3 = new weapon(
  "gun", "10", "images/gun.jpeg"
)
let weapon4 = new weapon(
  "knife", "5", "images/knife.jpeg"
)
const weapons = [weapon1, weapon2, weapon3, weapon4]

function placeWeapons(item) {
  let randomNumber = getRandomNumber($('.box').length);
  let box = $('.box')[randomNumber]
  let isOccupied = $(box).hasClass('occupied');
  if (isOccupied) {
    console.log(isOccupied)
    return placeWeapons(item)
  } else {
    $(box).addClass('occupied');
    box.innerHTML += `<img src='${item['_image']}'/>`
  }

}
// end of placing random weapons

//place obstacle on the game board
const obstacle = 'images/brick.jpeg';

function placeItem(item) {
  let randomNumber = getRandomNumber($('.box').length);
  let box = $('.box')[randomNumber]
  let isOccupied = $(box).hasClass('occupied');
  if (isOccupied) {
    console.log(isOccupied)
    return placeItem(item)
  } else {
    $(box).addClass('occupied').addClass('block');
    box.innerHTML += `<img src='${item}'/>`
    
  }

}

// define and place players on the board
class players{
  constructor(name, image){
      this._name = name;
      this._image = image
  }
}
let player1 = new players(
  'redMan', 'images/player1.jpeg'
)
let player2 = new players(
  'blackMan', 'images/player2.jpeg'
)

function placePlayers(item) {
  let randomNumber = getRandomNumber($('.box').length);
  let box = $('.box')[randomNumber]
  let isOccupied = $(box).hasClass('occupied');
  if (isOccupied) {
    console.log(isOccupied)
    return placePlayers(item)
  } else {
    $(box).addClass('occupied');
    box.innerHTML += `<img src='${item['_image']}'/>`
   
  }

}
const player = [player1, player2]



function getRandomNumber(length) {
  return Math.floor(Math.random() * length)
};

function renderWeapons() {
  for (let i = 0; i < weapons.length; i++)
    placeWeapons(weapons[i])
}
function renderPlayers() {
  for (let i = 0; i < player.length; i++)
    placePlayers(player[i])
}
function renderObstacles() {
  for (let i = 0; i < 12; i++) {
    placeItem(obstacle)
  }
}
renderWeapons();
renderPlayers();
renderObstacles()

