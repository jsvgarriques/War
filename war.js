// document.addEventListener('DOMContentLoaded', function(event) {
// function createDeck (){
//     let deck = new Array();
//     for (let i = 0; i < suits.length; i++)
//         for (let j = 0; j < values.length; j++) {
//             let card = {Value: values.length}

//     }
// -----VARIABLES-----
let playerCardsArray =[], computerCardsArray = [];//testing format
let playerWarCard , computerWarCard;
let playerDiscardPile =[], computerDiscardPile=[];
// -----declare global function-----
pullFromDiscard();
// -----------computerstuff------------
const computers_card = document.querySelector('.computers_card')
const cardsWonComputer= document.querySelector('.cardsWonComputer')
const cardCountComputer= document.querySelector('.cardCountComputer')
// ----------playerstuff---------------
let players_deck = document.querySelector('.players_deck')
let cardsWonPlayer= document.querySelector('.cardsWonPlayer')
let cardcountplayer= document.querySelector('cardcountplayer')
// ---------gamestatusbox------------
let gameStatus = document.querySelector('#gameStatus')
// ---------querySelector------------
let computerRank=  document.querySelector('#crank')
let playerRank= document.querySelector('#prank')
let computerSuit = document.querySelector("#csuit")
let playerSuit= document.querySelector('#psuit')
// -------------DECK------------
const suits = ["♥","♦","♣","♠"];
const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let deck = [];
// let playerHand=playerCards
// let computerhand=computerCards
function createDeck() {
    for (let i = 0; i<suits.length; i++) {
        for (let j = 0; j<ranks.length; j++) { 
            deck.push({suit:suits[i], 
                rank:ranks[j],
                value:j-1})
        }
    }
     ;
    // console.log(deck);
    // ----------shuffleFUNCTION----------
function shuffleDeck (deck) {
    for(let a =0; a<deck.length; a++) {
        const tempCard = deck[a];
        const randomIndex = Math.floor(Math.random()*52);
        let x = deck[a];
        deck[a] = deck[randomIndex];
        deck[randomIndex] = x
        deck[randomIndex] = tempCard
        }
    }shuffleDeck(deck)//happens inside create deck most be declared in here+ deck isnt global
};

createDeck()//invoking
// let shuffledDeck = createDeck()
// --------SPLITS DECK AND DEALS CARDS-------
function dealCards(){
      playerCardsArray = (deck.splice(0,26)) //link to the html of the card count
      computerCardsArray  = (deck.splice(0,26))
      gameStatus.innerText = "Play a card"//link this to the html of the carcount
    // console.log(playerCardsArray, playerCards, computerCardsArray, computerCards);
// its not stored anywhere 
 }

document.querySelector('#deal').addEventListener('click', dealCards);
// -----operatesTurnOverButton-----
// makes sure html is updated with current board status
function playCard (){
    if (playerCardsArray.length !== 0 && computerCardsArray.length !== 0 ){
    playerWarCard = playerCardsArray.shift()
    // console.log(playerWarCard)
    computerWarCard = computerCardsArray.shift()//returns top card from an array I think
    // console.log(computerWarCard.suit) 
    cardsWonComputer.innerText=computerCardsArray.length;
    cardsWonPlayer.innerText=playerCardsArray.length;
    computerRank.innerText=computerWarCard.rank;
    playerRank.innerText=playerWarCard.rank;
    computerSuit.innerText=computerWarCard.suit;
    playerSuit.innerText=playerWarCard.suit;
    // console.log(playerWarCard.suit)
    compareCards()
    } else {
     pullFromDiscard();
     winnerOfGame();
    }
}
// --------connectToButton--------
document.querySelector('#pulls_card').addEventListener('click',playCard);
// --------winnerOfTurn-------
function compareCards() {
    // console.log(playerDiscardPile)
    if ( playerWarCard.value > computerWarCard.value) {
            playerDiscardPile.push(playerWarCard, computerWarCard), gameStatus.innerText = "Player Wins!!!"
                // console.log(playerDiscardPile)
                ;
    } 
        else if (computerWarCard.value > playerWarCard.value) { 
            computerDiscardPile.push(playerWarCard, computerWarCard), gameStatus.innerText="Computer Wins!!!"
            // console.log(computerDiscardPile)
            ;
    } else {
            gameStatus.innerText = "It's Draw";
            playerDiscardPile.push(playerWarCard); computerDiscardPile.push(computerWarCard)//draw means each card goes to respective discard pile
        }
    
};
// --------pullFromDiscardPile--------
function pullFromDiscard() { 
    if (playerDiscardPile !== 0 && computerDiscardPile !== 0) {
            playerCardsArray = playerDiscardPile.splice(0, playerDiscardPile.length) //playerCardsArray = (deck.splice(0,26))
            computerCardsArray = computerDiscardPile.splice(0, computerDiscardPile.length)
        } winnerOfGame();
    };

// -------winnerOfGame-------
function winnerOfGame() {
    if (playerDiscardPile === 0 && playerCardsArray === 0 ){
        gameStatus.innerText = "Game Over Computer Wins!"
        } else if (computerDiscardPile === 0 && computerCardsArray === 0 ){
            gameStatus.innerText = "You are Victorious!";
    }
};





    //DONOTTOUCH TURNOVERCODE NOT NEEDED
// pull 2 cards one for the player and one for the comp
//let playerCard = deck.splice(Math.floor(Math.random()*deck.length),1)[0]
// let playerCard = deck.splice(Math.floor(Math.random()*deck.length),1)[0]
// display cards in the dom
// compare cards to see which is higher

// ---------GAMELOGIC-----------
// function winsRound () {
//     if ( playerWarCard === computerWarCard) { 
//         console.log('its War') }  
//         else if (playerCard < computerCard) {
//             playerDeck.push(playercard, computercard)//name playing pile?
//         }else { computerDeck.push(playerCard, computercard))}

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
// Initialising the canvas
