// let players = {
//     playerOne: "images/player1.jpeg",
//     playerTwo: "images/player2.png"
// };

// function randomPlay(length){
//   return Math.floor (Math.random(length));
// }

// function start(){
    
//     let bothPlayers = players(randomPlay(players*length));
//     // let total = bothPlayers;
//  document.getElementsByClassName("number").innerHTML = bothPlayers;

//     return bothPlayers;
   
// }
// console.log (bothPlayers);

function randomPlay(length){
  return Math.floor (Math.random(length));
}

let players =[
    "player1",
    "player2"
];

let weapons = [
    "weapon1",
    "weapon2",
    "weapon3",
    "weapon4"
];

function start(){
    let allPlayers = players[randomPlay(players.length)];
    let allWeapons = weapons[randomPlay(weapons.length)];

    let components = allPlayers + allWeapons;
    document.getElementsByClassName("number").innerHTML = components;
    return components;
}
console.log(start());