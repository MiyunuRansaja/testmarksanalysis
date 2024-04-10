function checkMarks() {
    // Get the entered admission number
    var admissionNumber = document.getElementById("admissionNumber").value;

    // Array of valid admission numbers
    var validAdmissionNumbers = [
        25281, 25327, 25348, 25606, 25607, 25609, 25611,
        25615, 25623, 25629, 25631, 25633, 25634, 25640,
        25642, 25752, 26122

    ];

    // Check if the entered admission number is valid
    if (validAdmissionNumbers.includes(parseInt(admissionNumber))) {
        // Redirect to the marks page for the entered admission number
        window.location.href = "marks_page_" + admissionNumber + ".html";
    } else {
        // Display error message for invalid admission number
        document.getElementById("errorText").innerHTML = "The admission number you have entered is wrong.";
    }
}
