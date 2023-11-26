// Assuming you have included jQuery

$(document).ready(function () {
    // Fetch existing user data and populate the form fields
    // This part depends on how you structure your HTML and retrieve user data

    // Event listener for the form submission
    $("#profileForm").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Getting form data
        var name = $("#name").val();
        var phone = $("#phone").val();
        var gender = $("#gender").val();
        var age = $("#age").val();
        var dob = $("#dob").val();

        // Basic client-side validation
        if (!name || !phone || !gender || !age || !dob) {
            alert("Please fill in all fields.");
            return;
        }

        // If all validation passes, submit the form
        $.ajax({
            type: "POST",
            url: "profile.php", // Update the URL if your file is in a different location
            data: {
                name: name,
                phone: phone,
                gender: gender,
                age: age,
                dob: dob
            },
            success: function (response) {
                // Displaying an alert message based on the response
                alert(response);
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});
