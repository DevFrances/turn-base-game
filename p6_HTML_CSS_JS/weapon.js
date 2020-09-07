class Weapon {
    constructor(name, damage, image){
        this._name = name;
        this._damage = damage;
        this._image = image;
        
       this.elem = `<img src='${image}' class= "weapon" id="${name}" />`

    }
     
  }



