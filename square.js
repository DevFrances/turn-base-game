class Square{
  constructor(row, col){
this.id = 'sq-${row}-${col}';
this._blocked = false;
this._player = null;
this._weapon = null
  }
  set blocked(bool){
    // set blocked property
  this._blocked = bool;
    // set a CSS blocked class
  if(bool){
    $(div).addClass('obstacle'); 
  }
  else {
    $(div).removeClass('obstacle');
  }
  }


get blocked(){
  return this._blocked
}
}


  