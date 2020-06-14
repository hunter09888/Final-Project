function idCard() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    var address = document.getElementById("address").value;
    var fullName = firstName + " " + lastName;
    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = address;
    var numberArray = [];
    numberArray.push(age)
    numberArray.push(phoneNumber)
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
            document.getElementById("postAge").innerHTML = "Age: " + numberArray[i];
        } else if (numberArray[i] > 100) {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
        }


    }



}