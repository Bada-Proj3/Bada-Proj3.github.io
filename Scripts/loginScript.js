let tint;

function toggleTint()
{

    size = screen.width;
    if (size > 1000)
    {
        document.body.classList.toggle(tint);
        
    }
}

function browserTint() {
    if (navigator.userAgent.indexOf("Firefox") != -1) {
        tint = "bodyTintFF";
    } else {
        tint = "bodyTint";
    }
}

window.addEventListener('load', function() {
    browserTint();
});

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

