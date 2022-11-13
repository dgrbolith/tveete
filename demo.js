import fetch from "node-fetch"
var fs = require("fs");
const { text } = require("stream/consumers");


// var readLalo = fs.readFile('lalol.txt', function(err, data) {
//     if (err) throw err;
//     return data;
// }
// )
// console.log(readLalo)

// function txtToProfit() {
//   let contents = fs.readFileSync("lalol.txt", 'utf-8');
//   contents = contents.replace(/\r|\n/g, '');
//   contents = contents.replace(/[�]/g, '\'');
//   const arr = contents.split(" ");
//   return arr;
// }

// function jmbleToProfit(lalOrray, girth) {

//   let laloLength = lalOrray.length;
//   let sentence = "";
  

  
//   for(let i = 0; i <= girth; i++) { 
//     const betweenZeroAndLalo = Math.random() * laloLength;
//     const intBetweenZeroAndLalo = Math.floor(betweenZeroAndLalo);
//     let jumblite = lalOrray[intBetweenZeroAndLalo];

//     if(i===0){
//       jumblite = jumblite[0].toUpperCase() + jumblite.substring(1)
//     }
    
//     sentence = sentence+jumblite;
//     if (i <= (girth - 1)) sentence += " ";
//   }

//   return sentence + ".";
  
// }

// const textArray = txtToProfit()

// let thouArtJumbled = jmbleToProfit(textArray, 20) 

// // console.log(thouArtJumbled)

// console.log(thouArtJumbled)


//end goal: 
// 1. read source text, 
// 2. mess it about
// 3. twitter, 


//construct ranom sentences from input text.
        //non repeating
        //entirely non repeating
//try to make it less random
      //use dictionary api to figure out what kind of word it is?
      //figure out how sentences do.
      //more????
      //profit
//posting to twitter
//find source text
//regret
//denial



////figuringitout

async function sucksTheCat() {
  
  const resultTheOfSuckedCat = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/grape");
  console.log(type(resultTheOfSuckedCat))
  return resultTheOfSuckedCat
}

console.log(sucksTheCat())