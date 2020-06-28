
class Board{
  constructor(players){
   this.model = this._createModel();
    this.start();
    this.playerPositions ={
       //row: row, col: col
    }
    this.renderPlayers(players);
    this.renderWeapons(weapons);
    this.renderObstacles();
    this.movePlayer({row:2, col:2});
    //this.assignCurrentPlayer();
   // this.switchTurn();
  }

  assignCurrentPlayer(){
    console.log('assign current player');
  }
  switchTurn() {
    console.log("picking our first player!");
    // this function needs to access the player positions object
    console.log(this.playerPositions);
    // pick a random player from this object
    // do you
    let currentPlayer = this.playerPositions.redMan;

    // highlight current player
    $(currentPlayer).addClass("current-player");
    //

    // you'd get the adjacent cells
    // you need to get all of the steps a player could make
    this.getAdjacentCells(currentPlayer);
    // here
  }
  
  getAdjacentCells({ row, col }) {
    // row: 1, col: 5

    let box = $(`#${row}-${col}`);
    console.log("what's up?");
    console.log(box);
    // represent the number of allowed steps
    let topCells = $(`#${row + 2}-${col}`);
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
           let pos1 = this.playerPositions.redMan; 
           console.log(pos1)
          let sq = this.model[pos1.row][pos1.col]; //determine the row and col, find the square
          console.log(sq)
          let newSq = this.model[newPos.row][newPos.col]
          let p = sq.player //gets player from the square
          sq.player = null //removes the player
          newSq.player = p 
          console.log(newSq)
           
         }
      
}

