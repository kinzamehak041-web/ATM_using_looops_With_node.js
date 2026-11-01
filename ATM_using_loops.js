const prompt = require("prompt-sync")();
let pin =Number(prompt("Enter your 4-digit pin: "));
let choice=0;
let balance = 10000;
if(pin === 1234){
    console.log("Access granted");
    while(choice!=4){
    console.log("1 : check balance: ")
    console.log("2 : withdraw money: ")
    console.log("3 :Deposit Money: ")
    console.log("4 : Exit: ")
    choice=Number(prompt("Enter options 1 or 2 or 3 or 4: "))
    if(choice === 1){
    console.log("your  current balance is: ", balance);
    }

else if(choice === 2){
    let withdraw=Number(prompt("Enter withdrawlAmount: "))
    if(withdraw >0 && withdraw <= balance){
            console.log("sufficient balance is available: ")
            console.log("withdrawAmount succesful: ",withdraw)
            balance=balance-withdraw;
            console.log("your remaining balance is: ",balance);
        
    }
    else{
        console.log("insufficient balance")
    }
}
else if(choice === 3){
    console.log("Enter money to Deposit: ")
    let Deposit=Number(prompt("Deposit"));
    if(Deposit >0){
        balance= balance+Deposit;
        console.log("your update balance is: ",balance);
    }
    else{
        console.log("invalid deposit amount")
    }
}
else if(choice === 4){
    console.log("Thanks for using our account: ");
}
else{
    console.log("invalid option")
}
}
}
else{
    console.log("pin is incorrect")
}

