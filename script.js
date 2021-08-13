var inputDate = document.querySelector("#input-date");
var inputLuckyDigit = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#btn-check");
var outputMessage = document.querySelector("#output-message")

checkButton.addEventListener("click", function check(){
    var birthDate = inputDate.value;
    var luckyNumber= inputLuckyDigit.value;
    var digits = birthDate.split("");
    var sum=0;
    for(var i=0; i<digits.length; i++){
        if(digits[i]==="-"){
            digits.splice(i,1);
        }

        sum=sum + parseInt(digits[i]);
        if(i === digits.length -1){
            var remainder = sum % luckyNumber;
            if(remainder===0){
                outputMessage.innerText= "Your Birthday is Lucky"
            }else{
                outputMessage.innerText="Oops! Sorry, your birthday isn't lucky, try again next life?"
            }
        }
    }

})