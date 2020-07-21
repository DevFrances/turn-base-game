
class Board{
  constructor(players, weapons){
   this.model = this._createModel();
    this.start();
    this.playerPositions ={
       
    }
    this.renderPlayers(players);
    this.renderWeapons(weapons);
    this.renderObstacles();
   // this.getAdjacentCells();
    const [redMan] = players;
    this.activePlayer = redMan
    this.players = players;
    console.log(this.playerPositions[this.activePlayer._name]
      )
    // this.validMoves(pos);
   let validMoves = this.validMoves(this.playerPositions[this.activePlayer._name]) 
    this.highlightValidMoves(validMoves)


  }
  highlightValidMoves(validMoves){

    console.log(validMoves);
    validMoves.forEach(square => {
    //console.log(this.model[square.row][square.col])

       $(`#${square.id}`).addClass("valid");

      }
      )
  }


  validMoves(pos){
    let validSquares = [];
    // squares above the current position
    for(let i = 1; i < 4; i++){

      let newRow = pos.row-i
      if(newRow < 0 ){
        console.log(newRow)
        console.log(pos)
        console.log(this.model)
        console.log(this.model[pos.row])
        console.log(this.model[pos.row][pos.col])
        console.log(this.activePlayer)
        break;

      }
      let sq = this.model[newRow][pos.col]
      if (sq.blocked || sq.player) {
        break;
      }
      validSquares.push(sq);
  
    }
    //squares below the current position
    for(let i = 1; i < 4; i++){

      let newRow = pos.row+i
      if(newRow >= this.model.length ){
        console.log(newRow)
        console.log(pos)
        console.log(this.model)
        console.log(this.model[pos.row])
        console.log(this.model[pos.row][pos.col])
        console.log(this.activePlayer)
        break;

      }
      let sq = this.model[newRow][pos.col]
      if (sq.blocked || sq.player) {
        break;
      }
      validSquares.push(sq);
  
    }
   //squares left of the current position
   for(let i = 1; i < 4; i++){
    let newCol = pos.col-i
  //   if(newCol < 0){
  //     break;
  //   }
  //   let sq = this.model[newCol][pos.col]
  //   if (sq.blocked || sq.player) {
  //    break;
  //  }
  // validSquares.push(sq);

    
     $(`#${pos.row}-${newCol}`).addClass("valid")
    
  if($(`#${pos.row}-${newCol}`).hasClass("barrier")  ) {
    $(`#${pos.row}-${newCol}`).removeClass("valid")
    console.log("test")
    break;
  
  }
 if ($(`#${pos.row}-${newCol}`).hasClass("player")){
    break;
  }
}
  
   //squares right of the current position
    for(let i = 1; i < 4; i++){
    let newCol = pos.col+i
    //  if(newCol >= this.model.length){
    //   break;
    // }
    // let sq = this.model[newCol][pos.col]
    // if (sq.blocked || sq.player) {
    //   break;
    // }
    // validSquares.push(sq);
  
   $(`#${pos.row}-${newCol}`)
   .addClass("valid");
  
  $(`#${pos.row}-${newCol}`).addClass("valid")
    
  if($(`#${pos.row}-${newCol}`).hasClass("barrier")  ) {
    $(`#${pos.row}-${newCol}`).removeClass("valid")
    console.log("test")
    break;
  
  }

 if ($(`#${pos.row}-${newCol}`).hasClass("player")){
    break;
  
   }
    return validSquares

  }
   }
  


  switchTurn() {
    if(this.activePlayer._name === "redMan"){
      console.log("redMan")
      this.activePlayer = this.players[1]
      console.log(this.players[1]);
    }

    else {
      this.activePlayer = players[0]
      console.log("blackMan")
      console.log(this.players[0])
    }
  
    }
   
      
  pickWeapon(){

  }
  //console.log($)
  // $('.valid').click(function (event) {
  //   console.log(event.target)
  //   }
  //   );
  _createModel(){
   let model = [] // model[2][3] is row 3, column 4 (since first row is 0)
    for (let r=0; r < 9; r++) {
        model.push( [] );  // start a new row
        for ( let c=0; c < 9; c++) {
            model[r].push( new Square(r, c) );  // push a new Square on current row
        }
    }
    console.log('hello chiamaka')
    return model;
  }
   start() {
      for (let rows = 0; rows < 9; rows++) {
        let row = document.createElement('div');
        row.className = "row";
        for (let cols = 0; cols < 9; cols++) {
            let box = document.createElement('div');
        //this.box = box;

            $(box).attr('id', `${rows}-${cols}`);
            box.className = "box";
            row.appendChild(box);
        }                
        document.getElementById('boxParent').appendChild(row);
     }

     }

      placeItem(item, clsName) {
        let randomNumber = this.getRandomNumber($('.box').length);
        let box = $('.box')[randomNumber] //gets a random box 
        let isOccupied = $(box).hasClass('barrier') || $(box).children().length > 0;//checks if its occupied with a barrier, weapon or player
        // let isOccupied = false;

        if (isOccupied) {
          console.log(isOccupied)
           this.placeItem(item, clsName);
        }else {
           let row = Number( $(box).attr('id')[0]); //gets the first character from the box
           let col = Number( $(box).attr('id')[2]);// gets the third charcter from the box
           let sq = this.model[row][col]; //determine the row and col, find the square
          if(clsName ==='barrier') {
            sq.blocked = true;  //updates the block square
            $(box).addClass('barrier'); //blocks the square with a class barrier
          }
          else if(item instanceof Player){
              sq.player = item 
              this.playerPositions[item._name] = { row: row, col: col }
             // console.log(this.playerPositions[item._name])
              box.innerHTML = item.elem;
          
          }
         else{
          sq.weapon = item
          box.innerHTML = item.elem;
        
         }
        }
      }
      renderPlayers(players) {
        for (let i = 0; i < players.length; i++){
          this.placeItem(players[i], "player")
        }
      }
      renderWeapons(weapons) {
        for (let i = 0; i < weapons.length; i++){
          this.placeItem(weapons[i], "weapon")
        }
      }
       renderObstacles() {
          for (let i = 0; i < 12; i++) {
            this.placeItem(null, "barrier")
          }
        }

         getRandomNumber(length) {
            return Math.floor(Math.random() * length)
          };
         
         movePlayer(newPos){
          let pos1 = this.playerPositions[this.activePlayer._name]; 
           //console.log(pos1)
           //let newPos = 
          let sq = this.model[pos1.row][pos1.col]; //determine the row and col, find the square
          console.log(sq)
          let newSq = this.model[newPos.row][newPos.col]
          let p = sq.player //gets player from the square
          sq.player = null//removes the player
          console.log(newPos)
          newSq.player = p 
          console.log(newSq)
           this.playerPositions[this.activePlayer._name] = newPos //updates the position of redMAn

           this.switchTurn();
           console.log(newPos)
         }
      
}






