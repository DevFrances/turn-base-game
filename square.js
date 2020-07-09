class Square{
  constructor(row, col){
this.id = `${row}-${col}`;
this._blocked = false;
this._player = null;
this._weapon = null
  }
  get blocked(){
    return this._blocked
  }
  set blocked(b){
    this._blocked = b;
  }
  get player(){
    return this._player; 
  }
  set player(p) { 
    //console.log(p)

    if(p === null){
     $('#'+this._player._name).remove()
    }else{
    let box = $(`#${this.id}`); //finds the div with the id for that sq
      $(box).append(p.elem)
    }
     // model
     this._player = p;
}
get weapon(){
  return this._weapon
}
set weapon(w) {
  this._weapon = w;

}

  }





  