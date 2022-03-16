//const input = [100, 0, 90, 30];

// for (let index = 0; index < input.length; index++){

//     console.log(input)
// }

// function filterItems(input) {
//     return input.filter(function(el){

//     })
// }
// console.log(filterItems())

// function isBigEnough(value) {
//     return value;
//   }
//   var filtered = input.filter(isBigEnough);
//   // filtered is [12, 130, 44]

//   console.log(filtered)
// var arr = [1, 2, 3];
// var max = Math.max(arr);
// // max: 3
// console.log(max, "assss")

//quando tiver get ou set é uma classe  computada então na hora de chamar não tem ()

class HighScores {
  constructor(input = []) {
    this._input = input;
  }
  get scores() {
    return this._input;
  }
  get latest() {
    return this._input[this._input.length - 1];
  }
  get personalBest() {
    return Math.max(...this._input);
  }
  get personalTopThree() {
    let x = this._input.sort((a, b) => b - a).slice(0, 3);
    console.log(x)
  }
}

const input = new HighScores([10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70]);

input.personalTopThree;


