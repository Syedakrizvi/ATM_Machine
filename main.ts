#! usr/bin/env node
import inquirer from "inquirer"

let mybalance: number =20000; //dollar3
let mypin = 1234;

let pinAnswer = await inquirer.prompt
([{
    name:"pin",
    message: "enter your pin",
    type: "number"
}]);


if (pinAnswer.pin === mypin){
    console.log("Correct pin code!!!");

   let operationAns = await inquirer.prompt([
        {
            name:"operation",
            message:"please select option",
            type:"list",
            choices:["withdraw", "check balance","Fastcash"]
        }
    ]);
    console.log(operationAns);
    if(operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"Enter your amount",
                    type:"number"

            }]
        );
        mybalance -= amountAns.amount ;{
        if(mybalance >= amountAns.amount){
            console.log("Your remaining balance is" + mybalance);
        }
        else{
        console.log("Insufficient balance");
        }
    }
    }
    
    else if(operationAns.operation === "check balance"){
        console.log("Your balance is " + mybalance)
    }
    else if(operationAns.operation === "Fastcash") {
        let cashAmount = await inquirer.prompt([
            {
                name:"cash",
                message:"Enter your amount",
                type:"list",
                choices:["5000", "10000", "15000", "20000"]
            }
        ]);
        mybalance -= cashAmount.cash
        console.log("Your remaining balance is" + mybalance)
    }
}
else{
    console.log("Incorrect pin number!!");

}
