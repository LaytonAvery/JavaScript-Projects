class BankAccount{
    constructor(firstName, lastName, middleName, balance, accountType){
        this.firstName=firstName
        this.lastName=lastName
        this.middleName=middleName
        this.balance=balance
        this.accountType=accountType
    }

    deposit(amount, accountType){
        this.balance+=amount
        this.accountType=accountType
        console.log(`You deposited $${amount} into your ${accountType} account.`)
    }

    withdraw(amount, accountType){
        this.balance-=amount
        this.accountType=accountType
        if (this.balance<0){
            this.balance-=35
            console.log("You have been charged $35 due to overdrafting your account.")
            console.log(`Your new balance is ${this.balance}`)
        }
    }
}

    newAccount(firstName, lastName, middleName, amount, accountType){
        if(amount < 100){
            console.log("Please deposit at least $100.")
        }else{
            this.firstName=firstName
            this.lastName=lastName
            this.middleName=middleName
            this.accountType=accountType
            this.accountStatus="open"
        }
    }
    transferMoney(amount, accountType){
        this.balance-=amount
        if (accountType==="savings"){
            savings.balance=balance
            console.log(`You have transferred ${this.balance} into your checking account.`)
        }else if (accountType==="checking"){
            checking.balance=balance
            console.log(`You have transferred ${this.balance} into your checking account.`)
        }
        else{ console.log("Thank you for banking with us.")
        }

    }