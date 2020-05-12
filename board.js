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
  constructor(){
    this._start = this.start();
    this._placeItem = this.placeItem();
    this._renderObstacles = this.renderObstacles();
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
     let elements = document.getElementsByClassName('box')
    return row
     }

      placeItem(item, clsName) {
        let randomNumber = getRandomNumber($('.box').length);
        let box = $('.box')[randomNumber]
        let isOccupied = $(box).hasClass('barrier') || $(box).children().length > 0;
        if (isOccupied) {
          console.log(isOccupied)
          return placeItem(item, clsName)
        }else {
          if(clsName ==='barrier') {
          $(box).addClass('barrier');
      
          }
          else{
          box.innerHTML += `<img src='${item['_image']}'/>`
      
          }
        }
      return box
      }

       renderObstacles() {
          for (let i = 0; i < 12; i++) {
            placeItem(null, "barrier")
          }
          return renderObstacles()
        }

         getRandomNumber(length) {
            return Math.floor(Math.random() * length)
          };
          
      
}
let myBoard = new Board();
