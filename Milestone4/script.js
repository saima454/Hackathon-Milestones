// get refreances t the form and display area.
var form = document.getElementById("resume form");
var resumeDisplayElement = document.getElementById("resume-display");
// handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect input values.
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // generate the resume content dynamically.
    var resumeHTML = "<h2><b> Editable Resume</b></h2>\n    <h3>personal information</h3>\n    <P><b>Name:</b><span contenteditable =\"true\">".concat(name, "</span></p>\n    <P><b>Email:</b><span contenteditable =\"true\">").concat(email, "</span></p>\n    <P><b>Phone:</b><span contenteditable =\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable =\"true\">").concat(education, "</p>\n\n    <h3>experience<h3>\n    <p contenteditable =\"true\">").concat(experience, "</p>\n\n    <h3>Skills<h3>\n    <p contenteditable =\"true\">").concat(skills, "</p>");
    //display  generated resume dynamically
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("the resume display element is dismissing.");
    }
});
