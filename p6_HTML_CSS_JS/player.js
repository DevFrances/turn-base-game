// define and place players on the board
class Player{
  constructor(name, image, health, weapon){
      this._name = name;
      this._image = image
      this._health = health;
      this.weapon = weapon;
      this.actions = "";

       // View
     
       this.elem = `<img src='${image}' class= "player" id="${name}" />`
  }
 
}





  








