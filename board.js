
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
    console.log(this.playerPositions[this.activePlayer._name])
    this.validSquares = this.validMoves(this.playerPositions[this.activePlayer._name]) 
    console.log(this.validSquares)
  
    this.highlightValidMoves(this.validSquares)

        $('.button').on('click',(e)=>{
          console.log(e.target)
        })
    
        $("#boxParent").on("click",  (e)=>{
          console.log(event)
          let row, col
          
          if(e.target.classList.contains('box') === false){
             [row, col] = event.target.parentElement.id.split("-");
          }else{
            [row, col] = event.target.id.split("-");

          }
          console.log(Object.keys(event.target));
          console.log(event.target.id);
          const parsedRow = parseInt(row)
          const parsedCol = parseInt(col)
          let sq = this.model[parsedRow][parsedCol]
     
          console.log(sq)
           if(this.validSquares.includes(sq) === false){// test if its a valid square,ignore
            console.log('hello')
            return
          }
          if(sq.weapon){
            this.pickWeapon(event.target.parentElement)
          }
          else{          
           const [row, col] = event.target.id.split("-");
           const parsedRow = parseInt(row)
           const parsedCol = parseInt(col)

       
         this.removeHighlight(this.validSquares) 
         this.movePlayer({ row:parsedRow, col:parsedCol});
         this.switchTurn()
  
         this.validSquares = this.validMoves(this.playerPositions[this.activePlayer._name]) //re compute new valid sqs for the new active player
         this.adjacentSquares = this.adjacentMoves(this.playerPositions[this.activePlayer._name]) //re compute new valid sqs for the new active player
         if(this.adjacentSquares) { alert("fight") }

         console.log(this.adjacentSquares)
         this.highlightValidMoves(this.validSquares)
        }
       

        })
        
      }


  highlightValidMoves(validMoves, adjacentSquares){
    console.log(this.validSquares)
    console.log(validMoves);
    validMoves.forEach(square => {
       $(`#${square.id}`).addClass("valid");

      }
      )
  }

  removeHighlight(validMoves){
    console.log(validMoves)
    console.log(validMoves);
    validMoves.forEach(square => {
    console.log(square)
       $(`#${square.id}`).removeClass("valid");

      }
      )
  }

  adjacentMoves(pos){
    console.log(pos)
    let adjUp = pos.row-1
    if(adjUp < 0 ){
      let sq = this.model[adjUp][pos.col]
      if(sq.player){
        console.log(sq)
        return true
      }
    }

    let adjDown = pos.row+1
    if(adjDown >= this.model.length ){
      let sq = this.model[adjDown][pos.col]
      console.log(sq)
      console.log(adjDown)
      if(sq.player){
        console.log(player)
        return true
      }
    }

    let adjLeft = pos.col-1
    console.log(adjLeft)
    // console.log(sq)
    if(adjLeft < 0){
      let sq = this.model[pos.row][adjLeft]
      console.log(sq)
      if(sq.player){
      console.log(player)
        return true
      }
    }

    let adjRight = pos.col+1
    if(adjRight >= this.model.length){
      let sq = this.model[pos.row][adjRight]
      console.log(sq)
      console.log(adjRight)
      if(sq.player){
        console.log(player)
        return true
      }
    }
      return false

  }
  validMoves(pos){
    let validSquares = [];
    // squares above the current position
    for(let i = 1; i < 4; i++){

      let newRow = pos.row-i
      if(newRow < 0 ){
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
        break;

      }
      let sq = this.model[newRow][pos.col]
      if (sq.blocked || sq.player) {
        break;
      }
      validSquares.push(sq);
  
    }
   for(let i = 1; i < 4; i++){
    let newCol = pos.col-i
    if(newCol < 0){
      break;
    }
    let sq = this.model[pos.row][newCol]
    if (sq.blocked || sq.player) {
     break;
   }
   validSquares.push(sq);

  }
     //squares right of the current position
     for(let i = 1; i < 4; i++){
      let newCol = pos.col+i
       if(newCol >= this.model.length){
        break;
      }
      let sq = this.model[pos.row][newCol] 
      if (sq.blocked || sq.player) {
        break;
      }
       validSquares.push(sq);    
     }
     this.validSquares = validSquares;
    return validSquares
   }
  
  switchTurn() {
    console.log(this.activePlayer)
    if(this.activePlayer._name === "redMan"){
      console.log("redMan")
      this.activePlayer = this.players[1]
      console.log(this.players[1]);
      console.log(this.validSquares)
    }

    else {
      this.activePlayer = this.players[0]
      console.log("blackMan")
      console.log(this.players[0])
      console.log(this.validSquares)
    }
  
    }
   
      
  pickWeapon(weapon){
    let tmpvar
    const [row, col] = weapon.id.split("-");
           const parsedRow = parseInt(row)
           const parsedCol = parseInt(col)
    let sq = this.model[parsedRow][parsedCol]
    let weapons = sq.weapon
    $(weapon).empty();
    tmpvar = sq.weapon 
    sq.weapon = this.activePlayer.weapon
    console.log(this.activePlayer)
    this.activePlayer.weapon = tmpvar
    this.movePlayer({ row: parsedRow, col: parsedCol })
    this.removeHighlight(this.validSquares) 
    this.movePlayer({ row:parsedRow, col:parsedCol});
    this.switchTurn()
    this.validSquares = this.validMoves(this.playerPositions[this.activePlayer._name]) //re compute new valid sqs for the new active player
    this.highlightValidMoves(this.validSquares)
    console.log(weapons)

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
           console.log(newPos)
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
          console.log(this.validSquares)
          
           console.log(this.activePlayer._name)
           console.log(newPos)
         }
      
}



