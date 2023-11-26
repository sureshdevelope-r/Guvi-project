// function registerUser() {
//     // Getting form data
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var gender = document.getElementById("gender").value;
//     var age = document.getElementById("age").value;
//     var dob = document.getElementById("dob").value;
//     var password = document.getElementById("password1").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;

//     // Basic client-side validation
//     if (!validateEmail(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     if (!validatePhone(phone)) {
//         alert("Please enter a valid 10-digit phone number.");
//         return;
//     }

//     if (new Date(dob) > new Date()) {
//         alert("Please enter a valid date of birth.");
//         return;
//     }

//     if (age > 120) {
//         alert("Please enter a valid age.");
//         return;
//     }

//     if (password !== confirmPassword) {
//         alert("Passwords do not match.");
//         return;
//     }

//     // If all validation passes, submit the form
//     $.ajax({
//         type: "POST",
//         url: "register.php",
//         data: {
//             name: name,
//             email: email,
//             phone: phone,
//             gender: gender,
//             age: age,
//             dob: dob,
//             password: password
//         },
//         success: function(response) {
//             // Displaying an alert message based on the response
//             if (response === "Registration successful") {
//                 alert("Registration successful");
//                 // Optionally, you can redirect the user to another page after successful registration
//                 // window.location.href = "success.html";
//             } else {
//                 alert("Registration failed. Please try again.");
//             }
//         },
//         error: function(error) {
//             console.log(error);
//         }
//     });
// }

// // Email validation function
// function validateEmail(email) {
//     var emailRegex = /\S+@\S+\.\S+/;
//     return emailRegex.test(email);
// }

// // Phone number validation function
// function validatePhone(phone) {
//     var phoneRegex = /^\d{10}$/;
//     return phoneRegex.test(phone);
// }



//another code
// Display error message function
function displayError(message) {
    alert("Error: " + message);
}

// Register user function
function registerUser() {
    // Getting form data
    var name = document.getElementById("name1").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var password = document.getElementById("password1").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Basic client-side validation
    if (!name || !email || !phone || !gender || !age || !dob || !password || !confirmPassword) {
        displayError("Please fill in all the fields.");
        return;
    }

    if (!validateEmail(email)) {
        displayError("Please enter a valid email address.");
        return;
    }

    if (!validatePhone(phone)) {
        displayError("Please enter a valid 10-digit phone number.");
        return;
    }

    if (new Date(dob) > new Date()) {
        displayError("Please enter a valid date of birth.");
        return;
    }

    if (age > 120) {
        displayError("Please enter a valid age.");
        return;
    }

    if (password !== confirmPassword) {
        displayError("Passwords do not match.");
        return;
    }

    // If all validation passes, submit the form
    $.ajax({
        type: "POST",
        url: "register.php",
        data: {
            name1: name,
            email: email,
            phone: phone,
            gender: gender,
            age: age,
            dob: dob,
            password1: password
        },
        success: function (response) {
            // Displaying an alert message based on the response
            if (response === "Registration successful") {
                alert("Registration successful");
                // Optionally, you can redirect the user to another page after successful registration
                // window.location.href = "success.html";
            } else {
                displayError(response);
            }
        },
        error: function (error) {
            console.log(error);
            displayError("Registration failed. Please try again.");
        }
    });
}

// Email validation function
function validateEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

// Phone number validation function
function validatePhone(phone) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}



