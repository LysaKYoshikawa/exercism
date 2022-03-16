//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  
  constructor() {
    this._balance = 0
    this._active = false    
  }

  open() {
    if (this._active == true) {
      throw new ValueError();
    }

    this._active = true;  
  }

  close() {
    if (this._active == false) {
      throw new ValueError();
    }

    this._active = false;
    this._balance = 0;
  }

  deposit(value) {
    if (this._active == false || value < 0) {
      throw new ValueError();
    }

    this._balance += value;
  }

  withdraw(value) {
    if (this._active == false || value > this._balance || value < 0) {
      throw new ValueError();
    }
    
    this._balance -= value;
    
  }

  get balance() {
    if (this._active == false) {
      throw new ValueError();
    }

    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
