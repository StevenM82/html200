let balance = 0;
let deposit = 0;
let withdraw = 0;
let input = 0;

function bankFunction (banked) {
    alert('Hello, how can I help you today?');
    
    do {
        let input = prompt('Q to quit \nW to withdraw \nD to deposit \nB to view balance');

        if (input === 'W') {
            withdraw = prompt("Withdraw how much?");
            if (balance - withdraw < 0) {
                alert("You can't dip negative. No free money for you!");
                continue;
            } else if (balance - withdraw < 300) {
                let withdrawn = prompt(`That will leave you with less than $300. \nDo you wish to continue? Y or N`);
                if (withdrawn === 'Y') {
                    alert(`You withdrew $${withdraw}`);
                    alert(`Your balance is getting low. \nYou have $${balance - withdraw} remaining`);
                    balance = balance - withdraw;
                    continue;
                } else {
                    continue;  
                }
            }
            alert(`You withdrew $${withdraw}`);
            balance = balance - withdraw;
            alert(`Your current balance is $${balance}`);

        } else if (input === 'D') {
            deposit = prompt("Deposit how much?");
                if (deposit >= 50000) {
                    alert(`You can't deposit that much at one time. \nWho walks around with that much money?!?!`);
                    alert(`The person behind you if you aren't careful...that's who.`)
                    continue;
                }
            balance = balance + Number(deposit);
            alert(`You deposited $${deposit}`);
            alert(`Your current balance is $${balance}`);

        } else if (input === 'B') {
            alert(`Your current balance is $${balance}`);

        } else if (input === 'Q') {
            alert(`Your current balance is $${balance}`);
            alert("See you later!");
            break;
        }
    } while (input != 'Q')
}