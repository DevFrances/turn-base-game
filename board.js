// create grid on board
// class Board{
//   constructor(){
    
//   }

// }
// function start() {
//   for (let rows = 0; rows < 9; rows++) {
//     let row = document.createElement('div');
//     row.className = "row";
//     for (let cols = 0; cols < 9; cols++) {
//         let box = document.createElement('div');
//         $(box).attr('id', `${rows}-${cols}`);
//         box.className = "box";
//         row.appendChild(box);
//     }                
//     document.getElementById('boxParent').appendChild(row);
//  }
//  let elements = document.getElementsByClassName('box')

//  }

// function getRandomNumber(length){
//   return Math.floor(Math.random()* length)
// };
// start()


// place all items on the board
// function placeItem(item, clsName) {
//   let randomNumber = getRandomNumber($('.box').length);
//   let box = $('.box')[randomNumber]
//   let isOccupied = $(box).hasClass('barrier') || $(box).children().length > 0;
//   if (isOccupied) {
//     console.log(isOccupied)
//     return placeItem(item, clsName)
//   }else {
//     if(clsName ==='barrier') {
//     $(box).addClass('barrier');

//     }
//     else{
//     box.innerHTML += `<img src='${item['_image']}'/>`

//     }
//   }

// }

// function getRandomNumber(length) {
//   return Math.floor(Math.random() * length)
// };


// function renderObstacles() {
//   for (let i = 0; i < 12; i++) {
//     placeItem(null, "barrier")
//   }
// }
// renderObstacles();



class Board{
  constructor(players){
    this.model();
    this.start();
    this.renderPlayers(players);
    this.renderWeapons(weapons);
    this.renderObstacles();
  }

  model(){
    var model = [];  // model[2][3] is row 3, column 4 (since first row is 0)

    for (let r=0; r<this.size; r++) {
        model.push( [] );  // start a new row
        for ( let c=0; c<this.size; c++) {
            model[r].push( new Square(r, c) );  // push a new Square on current row
        }
    }

    return model;
  }
   start() {
      for (let rows = 0; rows < 9; rows++) {
        let row = document.createElement('div');
        row.className = "row";
        for (let cols = 0; cols < 9; cols++) {
            let box = document.createElement('div');
            $(box).attr('id', `${rows}-${cols}`);
            box.className = "box";
            row.appendChild(box);
        }                
        document.getElementById('boxParent').appendChild(row);
     }

     }

      placeItem(item, clsName) {
        let randomNumber = this.getRandomNumber($('.box').length);
        let box = $('.box')[randomNumber]
        let isOccupied = $(box).hasClass('barrier') || $(box).children().length > 0;
        if (isOccupied) {
          console.log(isOccupied)
           this.placeItem(item, clsName);
        }else {
          if(clsName ==='barrier') {
          $(box).addClass('barrier');
      
          }
          else{
          // box.innerHTML += `<img src='${item['_image']}'/>`
            box.innerHTML = item.elem;
          }
        }
      }
      renderPlayers(players) {
        for (let i = 0; i < players.length; i++){
          this.placeItem(players[i], "player")
        }
      }
      renderWeapons() {
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
          movePlayer(){
            let pos1 = { row: 3, col: 4 };  // position where player is now
            let pos2 = { row: 3, col: 2 };  // position where you want to move player
            let box1 = Board.getBoxByPos(pos1);
            let box2 = Board.getBoxByPos(pos2);
            let p = box1.player;  // get player from box1
            box1.player = null;  // remove player from box1
            box2.player = p;  // place player in box2
          }
      
}

