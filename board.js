
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
    this.validMoves(this.playerPositions[this.activePlayer._name])


  }
  highlightValidMoves(validMoves){
    
    console.log(validMoves);
   return validMoves.forEach(square => {
      return $(`#${square.row}-${square.col}`).addClass("valid");
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
        break;

      }else if ($(`#${newRow}-${pos.col}`).hasClass("barrier"))
       { 
        
        console.log(newRow)
        console.log(pos)
        break;
        
       }else if ($(`#${newRow}-${pos.col}`).hasClass("player")){
        console.log(newRow)
        console.log(pos)
        break;
       }
       else{
        // console.log("hey Chiamaka");
        console.log(`Yeah: ${newRow}-${pos.col}`);
        validSquares.push({ row: newRow, col: pos.col }
          )
        console.log(newRow)
        console.log(pos)
       }

      let sq = this.model[pos.row][pos.col]; //determine the row and col, find the square
    this.highlightValidMoves(validSquares)
  
    }
    // square below the current position
    for(let i = 1; i < 4; i++){
      let newCol = pos.col-i
      if(newCol < 0 ){
        console.log(newCol)
        console.log(pos)
        break;
      console.log('hey girl')
      }else if ($(`#${newCol}-${pos.col}`).hasClass("barrier"))
       { 
      console.log('hey girl')
        
        console.log(newCol)
        console.log(pos)
        break;
        
       }else if ($(`#${newCol}-${pos.col}`).hasClass("player")){
      console.log('hey girl')

        console.log(newCol)
        console.log(pos)
        break;
       }
       else{
        // console.log("hey Chiamaka");
      console.log('hey girl')

        console.log(`Yeah: ${newCol}-${pos.col}`);
        validSquares.push({ row: newCol, col: pos.col }
          )
        console.log(newCol)
        console.log(pos)
       }

      let sq = this.model[pos.row][pos.col]; 
  
    }
    this.highlightValidMoves(validSquares)
   
    
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
  getAdjacentCells({ row, col }) {
    // row: 1, col: 5

    let box = $(`#${row}-${col}`);
    console.log("what's up?");
    console.log(box);
    // represent the number of allowed steps
    let topCells = $(`#${row + 2}-${col}`);
    let rightCells =$(`#${row + 2}-${col}`);
    let bottomCells =$(`#${row + 2}-${col}`);
    let leftCells =$(`#${row + 2}-${col}`);

    return [topCells, rightCells, bottomCells, leftCells]
  }
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






