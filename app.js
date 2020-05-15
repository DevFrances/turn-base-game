let player1 = new player(
  'redMan', 'images/player1.jpeg', 100
)
let player2 = new player(
  'blackMan', 'images/player2.jpeg', 100
)
const players = [player1, player2]

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

class App{
  constructor(){
    this.board = new Board (players, weapons)  
  }
  
}
