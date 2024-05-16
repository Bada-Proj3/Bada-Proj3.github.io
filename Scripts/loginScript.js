
function toggleTint()
{
    size = screen.width;
    if (size > 1000)
    {
        document.body.classList.toggle('bodyTint');
        
    }
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById("passin");
    var eye = document.getElementById("eyeimg");
    if (passwordField.type === "password") {
        eye.src = "Images/Misc/eyehide.png";
        passwordField.type = "text";
    } else {
        eye.src = "Images/Misc/eye.png";
        passwordField.type = "password";
    }
}

