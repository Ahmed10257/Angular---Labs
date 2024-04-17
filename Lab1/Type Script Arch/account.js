//Parent Class
class Account {
    constructor(Acc_no, Balance) {
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
//Child Classes
//Current Account
class Current_Account extends Account {
    constructor(Acc_no, Balance, Date_of_opening) {
        super(Acc_no, Balance);
        this.Date_of_opening = Date_of_opening;
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
class Saving_Account extends Account {
    constructor(Acc_no, Balance, Date_of_opening) {
        super(Acc_no, Balance);
        this.Date_of_opening = Date_of_opening;
    }
    addCustomer() {
        console.log("Add Customer");
    }
    removeCustomer() {
        console.log("Remove Customer");
    }
}
