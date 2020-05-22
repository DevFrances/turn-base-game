// define and place players on the board
class player{
  constructor(name, image, health){
      this._name = name;
      this._image = image
      this._health = health;
       // View
     
       this.elem = `<img src='${image}' class= "player" id="${name}" />`
    //    this.elem = `<img src='${name}' class= "player"/>`

       
  }
 
}





  








