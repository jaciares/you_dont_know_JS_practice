const TAX_RATE = 0.06;
const SMART_PHONE_PRICE = 1000.00;
const PHONE_CASE_PRICE = 20.00;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

var amount = 0;

// Getting user's money info.
var moneyInBank = window.prompt("How much money is in your bank account?");

// Lets go shopping and buy stuff until our money runs out!
while(amount < moneyInBank){
    var smartPhoneAmt = window.prompt("How many smartphones did you want?")
    amount = amount + (SMART_PHONE_PRICE * smartPhoneAmt);

    // See if the user can afford to buy a phone case.
    if (amount < moneyInBank) {
        var phoneCaseAmt = window.prompt("How many phone cases do you need?");
        amount = amount + (PHONE_CASE_PRICE * phoneCaseAmt);
    
    }   
}

// adding tax to the amount for final total.
amount = amount + calculateTax(amount);

console.log("Your purchase today was: " + formatAmount(amount))

// But can you afford to pay?
if (amount > moneyInBank) {
    console.log("Sorry your too broke to afford this purchase. lol");
}