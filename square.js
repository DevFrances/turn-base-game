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
    if(p === null){
    
      $(this._player.elem).detach()
     
      //console.log( `p = null ${this.id} `)
    }else{
    let box = $(`#${this.id}`); //finds the div with the id for that sq
      $(box).append(p.elem)
     // console.log( `${p.elem} ${this.id} `)

    }
     // model
     this._player = p;



    //  if(p === null){
    //  let box = document.createElement('div');
      
    //   let p = sq.player //gets player from the square
    //     sq.player = null 
    //   $(box).removeChild(elem)
    // }else{
    //   let box = document.createElement('div');
    //  this.playerPositions[item._name] = { row: row, col: col }
    //   $(box).attr('id', `${rows}-${cols}`);
    //  elem = `<img src='${image}' class= "player" id="${name}" />`
    //   $(p.elem).append(box);
    //  }
}
get weapon(){
  return this._weapon
}
set weapon(w) {
  this._weapon = w;

}

  }





  