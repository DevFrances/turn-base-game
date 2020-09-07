// random obstacle disabled
$('.obstacle').prop('disabled', true)
      
    // instantiate players
    let player1 = new Players ("player1", 100,"images/player1.jpeg");
    let player2 = new Players("player2", 100, "images/player2.jpeg");



// instantiate weapons
let gun = new weapon('Gun', 10, );
let dynamite = new weapon('Dynamite', 15,);
let knife = new weapon('Knife', 20,);
let bomb = new weapon('Bomb', 25,);



// instantiate obstacles
let obstacle = new obstacles("images/brick.jpeg")

