// define and place players on the board
class players{
  constructor(name, image, health){
      this._name = name;
      this._image = image
      this._health = health;
  }
  renderPlayers(){
    return renderPlayers()
  }

}
let player1 = new players(
  'redMan', 'images/player1.jpeg', 100
)
let player2 = new players(
  'blackMan', 'images/player2.jpeg', 100
)
const player = [player1, player2]

function renderPlayers() {
  for (let i = 0; i < player.length; i++){
    placeItem(player[i], "player")
  }
}

let myPlayers = new players();

  








