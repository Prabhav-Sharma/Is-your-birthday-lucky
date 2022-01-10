//ES6 Version Code
const inputDate = document.querySelector("#input-date");
const inputLuckyDigit = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#btn-check");
const outputMessage = document.querySelector("#output-message")
const privacyButton = document.querySelector("#privacy");
const privacyMessage = document.querySelector("#privacy-message")



checkButton.addEventListener("click", _=> {
    let birthDate = inputDate.value;
    let luckyNumber = inputLuckyDigit.value;
    let digits = birthDate.split("");
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === "-") {
            digits.splice(i, 1);
        }

        sum = sum + parseInt(digits[i]);
        if (i === digits.length - 1) {
            let remainder = sum % luckyNumber;
            if (remainder === 0) {
                outputMessage.innerText = "Yay, Your Birthday is Lucky 🎉"
            } else {
                outputMessage.innerText = "Oops! Sorry, your birthday isn't lucky, try again next life?"
            }
        }
    }

})

privacyButton.addEventListener("click", _=> {
    privacyMessage.innerText = "Policy: We don't store your information."
})