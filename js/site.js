//controller function
function getValues(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    let reversedString = reverseString(userString);
    let palindromeCheck = palindromeChecker(reversedString, userString);

    displayString(reversedString, userString, palindromeCheck);

}


//logic functions
function reverseString(userString){
    let revString = [];

    for (let index = userString.length - 1; index >= 0; index --){
        revString += userString[index];
    }

    return revString
}

function palindromeChecker(revString, userString) {
    isPalindrome = "";
    revString = revString.toLowerCase();
    userString = userString.toLowerCase();

    if (revString == userString) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }

    return isPalindrome
}

//display function
function displayString(reversedString, userString, palindromeCheck) {

    if (palindromeCheck) {
        //write message to page
        document.getElementById("msg").innerHTML = `Your string reversed is: ${reversedString}`;

        //Change alert color
        document.getElementById("alert").classList.remove("alert-danger");
        document.getElementById("alert").classList.add("alert-warning");

        //show alert box
        document.getElementById("msgHeading").innerHTML = "Yay!"
        document.getElementById("alert").classList.remove("invisible");
    } else {
        //write message to page
        document.getElementById("msg").innerHTML = `Your string is ${userString}. The reversed string is ${reversedString}`;

        //Change message header and alert box color
        document.getElementById("msgHeading").innerHTML = "Nope!"

        document.getElementById("alert").classList.remove("alert-warning");
        document.getElementById("alert").classList.add("alert-danger");

        //show alert box
        document.getElementById("alert").classList.remove("invisible");

    }

}