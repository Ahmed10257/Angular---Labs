//Parent Class
class Account {
  Acc_no: number;
  Balance: number;
  constructor(Acc_no: number = 0, Balance: number = 0) {
    this.Acc_no = Acc_no;
    this.Balance = Balance;
  }
  debitAmount() {
    console.log("Debit Amount");
  }

  creditAmount() {
    console.log("Credit Amount");
  }

  getBalance() {
    console.log("Get Balance");
  }
}
//---------------------------------------------------------------------------------
//Interface
interface IAccount {
  Date_of_opening: Date;

  addCustomer();
  removeCustomer();
}
//---------------------------------------------------------------------------------
//Child Classes
//Current Account
class Current_Account extends Account implements IAccount {
  constructor(
    Acc_no: number,
    Balance: number,
    public Date_of_opening: Date = new Date()
  ) {
    super(Acc_no, Balance);
  }

  addCustomer() {
    console.log("Add Customer");
  }

  removeCustomer() {
    console.log("Remove Customer");
  }
}
//---------------------------------------------------------------------------------
//Saving Account
class Saving_Account extends Account implements IAccount {
  constructor(
    Acc_no: number,
    Balance: number,
    public Date_of_opening: Date = new Date()
  ) {
    super(Acc_no, Balance);
  }

  addCustomer() {
    console.log("Add Customer");
  }

  removeCustomer() {
    console.log("Remove Customer");
  }
}
