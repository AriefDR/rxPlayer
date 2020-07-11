function validation() {
    var arrError = []
    var fName = document.getElementById('fname').value
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
    var gender = document.getElementById('gender').value
    var payment = document.getElementById('payment').value
    var agrement = document.getElementById('agrement').value

    // validate fullname
    if (fName == "" || fName == " ") {
        arrError.push("Full name Not be Empty")
    } else if (fName.length < 3) {
        arrError.push("Must more than 3 character")
    } else if (fName.length > 30) {
        arrError.push("Your character is too long")
    }
    // validte email
    if (email == "" || email == " ") {
        arrError.push("Email Not be Empty")
    } else if (email.charAt(0) == "." || email.charAt(0) == "@") {
        arrError.push("The first character cannot be the word '@' or '.' ")
    } else if (email.indexOf("@") == -1) {
        arrError.push("Email format is wrong")
    }

    // validate password
    if (pass == "" || pass == " ") {
        arrError.push("Password Not be Empty")
    } else if (pass.length < 6) {
        arrError.push("Password must more than 6 character")
    } else if (fName.length > 30) {
        arrError.push("Your character is too long")
    }
    // validate gender
    if (gender != "Male" && gender != "Female") {
        arrError.push("oops something went wrong")
    }
    // validate payment
    if (payment != "Credit" && payment != "LinkAja" && payment != "Ovo" && payment != "GoPay") {
        arrError.push("oops something went wrong")
    }
    // validte aggrement 
    if (form.agrement.checked == false) {
        arrError.push("You must agree to the terms first.")
    }
    if (arrError.length == 0) {
        document.getElementById("alert-msg").classList.add("alert-success")
        document.getElementById("msg").innerHTML = "Input success"
        document.getElementById("alert-msg").classList.remove("alert-danger")
    } else {
        document.getElementById("alert-msg").classList.add("alert-danger")
        document.getElementById("msg").innerHTML = arrError[0]
        document.getElementById("alert-msg").classList.remove("alert-success")
    }

}