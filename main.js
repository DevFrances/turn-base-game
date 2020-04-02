// random obstacle disabled
$('.obstacle').prop('disabled', true)

// define players
    class Players{
        constructor(names, health, images){
            this.names = names
            this.health = health
            this.images = images
        }
    }
      
    // instantiate players
    let player1 = new Players ("player1", 100,"images/player1.jpeg");
    let player2 = new Players("player2", 100, "images/player2.jpeg");

// define Weapons
class weapon {
    constructor(weapon, point){
        this.weapon = weapon,
        this.point = point
    }
}

// instantiate weapons
let gun = new weapon('Gun', 10, );
let dynamite = new weapon('Dynamite', 15,);
let knife = new weapon('Knife', 20,);
let bomb = new weapon('Bomb', 25,);


// define obstacles
class obstacles {
    constructor(image){
        this.image = image
    }
}
// instantiate obstacles
let obstacle = new obstacles("images/brick.jpeg")


// initiate player movement
let turn = player1;
let selected = false;
let moves = [
  [
    [0, 1], [0, 2], [0, 3]
  ],
  [
    [0, -1], [0, -2], [0, -3]
  ],
  [
    [1, 0], [2, 0], [3, 0]
  ],
  [
    [-1, 0], [-2, 0], [-3, 0]
  ]

];

$('#3_1').on('click', function(){
  $('.number').animate({moves})
})