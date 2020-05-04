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
const player = [player1, player2]

function renderPlayers() {
  for (let i = 0; i < player.length; i++){
    placeItem(player[i], "player")
  }
}

renderPlayers();


  








