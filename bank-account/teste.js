class BankAccount {
    
    constructor(open, close,deposit, withdraw) {
      this.open = open;
      this.close = close;
      this.deposit = deposit;
      this.withdraw = withdraw;
    }
  
    open() {
      
    }
  
    close() {
      throw new Error('Remove this statement and implement this function');
    }
  
    deposit() {
      throw new Error('Remove this statement and implement this function');
    }
  
    withdraw() {
      throw new Error('Remove this statement and implement this function');
    }
  
    get balance() {
      return this.deposit - this.withdraw;
    }
  }
  
  export class ValueError extends Error {
    constructor() {
      super('Bank account error');
    }
  }