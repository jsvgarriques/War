// document.addEventListener('DOMContentLoaded', function(event) {
// function createDeck (){
//     let deck = new Array();
//     for (let i = 0; i < suits.length; i++)
//         for (let j = 0; j < values.length; j++) {
//             let card = {Value: values.length}

//     }
let cardcountComputer=
let players_deck =document.querySelector("players_deck")
let computers_card =document.querySelector('computers_card')
let=document.getElementsByClassName
let=document.getElementsByClassName
let = document.getElementsByClassName
let dropbox = document.getElementsByClassName("dropbox")

const suits = ["♥","♦","♣","♠"];
const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let deck = [];
let playerHand=[]
let computerhand=[]
function createDeck() {
    for (let i = 0; i<suits.length; i++) {
        for (let j = 0; j<ranks.length; j++) { 
            deck.push({suit:suits[i], 
                rank:ranks[j],
                value:j-1})
        }
    }
    console.log(deck);
    // shuffle
function shuffleDeck (deck) {
    for(let a =0; a<deck.length; a++) {
        const tempCard = deck[a];
        const randomIndex = Math.floor(Math.random()*52);
        let x = deck[a];
        deck[a] = deck[randomIndex];
        deck[randomIndex] = x
        deck[randomIndex] = tempCard
        
    }
    
    }shuffleDeck(deck)
};

createDeck()//invoking
// let shuffledDeck = createDeck()

 
// pull random card
function dealCards(){
    let playerCards = deck.splice(0,26)
    // pull 2 cards one for the player and one for the comp
    let computerCards  = deck.splice(0,26)
    // display cards in the dom
    // compare cards to see which is higher
    console.log(playerCards, computerCards);
    return 
}
document.querySelector('#deal').addEventListener('click', dealCards);

//let playerCard = deck.splice(Math.floor(Math.random()*deck.length),1)[0]DONOTTOUCH TURNOVERCODE
// pull 2 cards one for the player and one for the comp
//let playerCard = deck.splice(Math.floor(Math.random()*deck.length),1)[0]
// display cards in the dom
// compare cards to see which is higher
// function winsRound () {
//     if ( playerCard === computerCard) { 
//         console.log('its War') }  
//         else if (playerCard < computerCard) {
//             playerDeck.push //name playing pile
//         }else (computerCard )

//     }
// }
// // function deal(){
//
// }
// function shuffle(deck) {
//     for ( let b =0; b < deck.length; b++) { 
//         const tempCard = deck[b];
//         const randomIndex = Math.floor(Math.random() * (52);
//         let x = deck[randomIndex]
// // shuffle()
// console.log(shuffle(deck))

// function shuffle()
// split deck between player one and two
// display card count

//function recieve cards after victory
// player discard pile
// computer discard pile