class weapon {
    constructor(name, damage, image){
        this._name = name;
        this._damage = damage;
        this._image = image;
        this._renderWeapons = renderWeapons()
    }
     renderWeapons() {
      for (let i = 0; i < weapons.length; i++){
        placeItem(weapons[i], "weapon")
      }
      return renderWeapons()
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

  // let myWeapon = new weapon();


