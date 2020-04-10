class square{
  constructor(row, col){
this.id = 'sq-${row}-${col}';
this._blocked = false;
this._player = null;
this._weapon = null
  }
}


  set ;blocked(false){
    // set blocked property
  this._blocked = false;
    // set a CSS blocked class
  if(false){
    $(div).addClass('obstacle'); 
  }
  else {
    $(div).removeClass('obstacle');
  }
  }


get ;blocked(false){
  return this._blocked
};