// create grid on board
function start() {
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

 }

function getRandomNumber(length){
  return Math.floor(Math.random()* length)
};
start()


// place all items on the board
function placeItem(item, clsName) {
  let randomNumber = getRandomNumber($('.box').length);
  let box = $('.box')[randomNumber]
  let isOccupied = $(box).hasClass('occupied');
  if (isOccupied) {
    console.log(isOccupied)
    return placeItem(item, clsName)
  } else {
    $(box).addClass('occupied');
    box.innerHTML += `<img src='${item['_image']}' class='${clsName}'/>`
  }

}

function getRandomNumber(length) {
  return Math.floor(Math.random() * length)
};

// obstacle class created
class obstacles{
  constructor(image){
      this._image = image;
  }
}
let allObstacle = new obstacles('images/brick.jpeg')
const obstacle = [allObstacle];

function renderObstacles() {
  for (let i = 0; i < 12; i++) {
    placeItem(allObstacle, "barrier")
  }
}
renderObstacles();
