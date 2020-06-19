class Square{
  constructor(row, col){
this.id = `sq-${row}-${col}`;
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
    // model
    this._player = p;
    // if(p === null){
    //   $(item.elem).row.removeChild(box)
    // }else{
    //   $(p.elem).appendChild(box);
    // }
}
get weapon(){
  return this._weapon
}
set weapon(w) {
  this._weapon = w;

}

  }





  