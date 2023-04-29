function createAccount(pin, initialDeposit) {
    let balance = initialDeposit;

    function checkBalance(inputPin) {
        if (inputPin === pin) {
            return `Current balance: $${balance}`
        } else {
            return "Invalid pin";
        }
    }

    function deposit(inputPin, pin) {
        if (inputPin === pin) {
            balance += amount;
            return `Successfully deposited $${amount}. Current balance: $${balance}`;
        } else {
            return "Invalid pin";
        }
    }

    function withdraw(inputPin, amount) {
        if (inputPin === pin) {
            if (balance >= amount) {
                balance -= amount;
                return `Successfully withdrew $${amount}. Current balance: $${balance}`;
            } else {
                return "Withdrawal amount exceeds account balance. Transaction canceled."
            }
        } else {
            return "Invalid pin."
        }
    }

    function changePin(oldPin, newPin) {
        if (oldPin === pin) {
            pin = newPin;
            return "PIN successfully changed!";
        } else {
            return "Invalid pin."
        }
    }

    return {
        checkBalance, 
        deposit,
        withdraw, 
        changePin
    };

}

module.exports = { createAccount };
