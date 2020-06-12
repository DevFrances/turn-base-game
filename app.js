let player1 = new Player(
  'redMan', 'images/player1.jpeg', 100
)
let player2 = new Player(
  'blackMan', 'images/player2.jpeg', 100
)
const players = [player1, player2]

let weapon1 = new Weapon(
  "bomb", "30", "images/bomb.png"
)
let weapon2 = new Weapon(
  "dynamite", "20", "images/dynamite.jpeg"
)
let weapon3 = new Weapon(
  "gun", "10", "images/gun.jpeg"
)
let weapon4 = new Weapon(
  "knife", "5", "images/knife.jpeg"
)
const weapons = [weapon1, weapon2, weapon3, weapon4]

class App{
  constructor(){
    this.board = new Board (players, weapons)  
  }
  
}
