class Square{
  constructor(row, col){
this.id = 'sq-${row}-${col}';
this._blocked = false;
this._player = null;
this._weapon = null
  }

  set player(p) {
    // model
  sq.player = item;

  let sq = this.model[row][col];
    this._player = p;
    sq.blocked = true;

    // view comes later…
}
set weapon(w) {
  sq.weapon = item;
  let sq = this.model[row][col];
  this._weapon = w;
  sq.blocked = true;
}

  }





  