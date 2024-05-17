let tint;
ff = false;

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
        ff = true;
    } else {
        tint = "bodyTint";
    }
}

window.addEventListener('load', function() {
    browserTint();
});

function togglePasswordVisibilityLog() {
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
function togglePasswordVisibilitySig() {
    var passwordField = document.getElementById("passinS");
    var eye = document.getElementById("eyeimgS");
    if (passwordField.type === "password") {
        eye.src = "Images/Misc/eyehide.png";
        passwordField.type = "text";
    } else {
        eye.src = "Images/Misc/eye.png";
        passwordField.type = "password";
    }
}
function showsign()
{
    Show();
    if (ff)
    {
        wr = document.getElementsByClassName("signwrap");
        wr = wr[0];
        wr.classList.add("signwrapshow");
        wr.classList.remove("signwraphide");
    }


    f = document.getElementsByClassName("signf");
    f = f[0];
    f.classList.add("signfshow");
    f.classList.remove("signfhide");

}
function cancelsup()
{
    if(ff)
    {
        wr = document.getElementsByClassName("signwrap");
        wr = wr[0];
        wr.classList.add("signwraphide");
        wr.classList.remove("signwrapshow");
    }

    f = document.getElementsByClassName("signf");
    f = f[0];
    f.classList.add("signfhide");
    f.classList.remove("signfshow");
    setTimeout(Hide, 1000);
}

function Hide()
{
    wr = document.getElementsByClassName("signwrap");
    wr = wr[0];
    wr.style.display = "none"
}

function Show()
{
    wr = document.getElementsByClassName("signwrap");
    wr = wr[0];
    wr.style.display = "flex"
}