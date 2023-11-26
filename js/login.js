// Login user
function loginUser() {
    // Get form data
    var email = $("#email").val();
    var password = $("#password").val();

    // Basic client-side validation
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Send data to login.php
    $.ajax({
        type: "POST",
        url: "login.php",
        data: {
            email: email,
            password: password
        },
        success: function(response) {
            alert(response);
            // Optionally, redirect to profile page after successful login
            // window.location.href = "profile.php";
        },
        error: function(error) {
            console.log(error);
        }
    });
}


