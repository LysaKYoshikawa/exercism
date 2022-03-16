//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
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
    return this._input.sort((a, b) => b - a).slice(0, 3);
  }
}