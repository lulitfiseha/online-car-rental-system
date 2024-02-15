function validateForm() {
	var username = document.forms["signup"]["username"].value;
	var password = document.forms["signup"]["password"].value;
	var confirmPassword = document.forms["signup"]["confirmPassword"].value;
	var phoneNumber = document.forms["signup"]["phoneNumber"].value;
	var email = document.forms["signup"]["email"].value;
	var valid = true;

	if (username == "") {
		displayError("username", "Please enter a username.");
		valid = false;
	}

	if (password.length < 8) {
		displayError("password", "Password must be at least 8 characters.");
		valid = false;
	}

	if (password != confirmPassword) {
		displayError("confirmPassword", "Passwords do not match.");
		valid = false;
	}

	if (!/^[0-9]*$/.test(phoneNumber)) {
		displayError("phoneNumber", "Phone number must be numeric.");
		valid = false;
	}

	if (!/\S+@\S+\.\S+/.test(email)) {
		displayError("email", "Please enter a valid email address.");
		valid = false;
	}

	return valid;
}

function displayError(fieldId, message) {
	var field = document.getElementById(fieldId);
	field.classList.add("error");
	var errorDiv = document.getElementById(fieldId + "-error");
	errorDiv.innerHTML = message;
}

document.addEventListener("DOMContentLoaded", function() {
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener("input", function(event) {
			var field = event.target;
			var errorDiv = document.getElementById(field.id + "-incorrect");
			field.classList.remove("incorrect");
			errorDiv.innerHTML = "";
		});
	}
});